import {getIp, getMac, isLinux, getUsername} from "@/app/lib/server/setup"
import { Client } from "ssh2";


export async function startDesktop(id: number){
    const wol = require('wake_on_lan');

    wol.wake(getMac(id), { address: '255.255.255.255' }, (error: Error | null) => {
        if (error) {
            console.error('Failed to send WoL packet:', error);
        }
        else {
            console.log('WoL packet sent!');
        }
    });
}

export function stopDesktop(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const ip = getIp(id);
    if (!ip) return reject(new Error('IP not found for desktop ' + id));

    const conn = new Client();
    const sshConfig = {
      host: ip,
      username: getUsername(id),
      privateKey: process.env.COMPUTERSTATUS_SSH_KEY
    };

    const shutdownCommand = isLinux(id) ? 'sudo shutdown -h now' : 'shutdown /s /t 0';

    conn
      .on('ready', () => {
        conn.exec(shutdownCommand, (err, stream) => {
          if (err) {
            conn.end();
            return reject(err);
          }
          stream
            .on('close', () => {
              console.log('Shutdown command sent.');
              conn.end();
              resolve();
            })
            .on('data', (data) => console.log('STDOUT:', data.toString()))
            .stderr.on('data', (data) => console.error('STDERR:', data.toString()));
        });
      })
      .on('error', (err) => reject(err))
      .connect(sshConfig);
  });
}
