import fs from 'fs'
import path from 'path';
import { Desktop, DesktopsSchema } from '@/app/lib/server/desktop';

export function getDesktops(): Desktop[]{
  const filePath = path.join(process.cwd(), 'config.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw);
  return DesktopsSchema.parse(parsed);
}


// Getters for information
export function getIp(id: number): string | null {
  return getDesktops().find(d => d.id === id)?.ip ?? null;
}

export function getMac(id: number): string | null {
  return getDesktops().find(d => d.id === id)?.mac ?? null;
}

export function getUsername(id: number): string | null {
  return getDesktops().find(d => d.id === id)?.username ?? null;
}

export function isLinux(id: number): boolean | null {
  return getDesktops().find(d => d.id === id)?.linux ?? null;
}