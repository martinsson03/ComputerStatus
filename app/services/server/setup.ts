import desktopsConfig from '@/config.json'

export type Desktop = {
  id: number;
  name: string;
  mac: string;
  ip: string;
};

// TypeScript ensures type safety
const desktops: Desktop[] = desktopsConfig;

export function getDesktops(): Desktop[] {
  return desktops;
}

export function getIp(id: number): string | null {
  return desktops.find(d => d.id === id)?.ip ?? null;
}

export function getMac(id: number): string | null {
  return desktops.find(d => d.id === id)?.mac ?? null;
}