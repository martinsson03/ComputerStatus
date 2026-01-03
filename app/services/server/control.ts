import {getIp, getMac} from "@/app/services/server/setup"

export async function startDesktop(id: number){
    const wol = require('wake_on_lan');
    try{
        wol.wake(getMac(id), { address: '255.255.255.255' }, (error: Error | null) => {
            if (error) {
            console.error('Failed to send WoL packet:', error);
            } else {
            console.log('WoL packet sent!');
        }
        });
    }
    catch (err){
        return true;
    }
    

}

export async function stopDesktop(ip: number){
    throw new Error("Not implemented")
}