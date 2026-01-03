export type Desktop = {
  id: number;
  name: string;
  mac: string;
  ip: string;
};

const desktops: Desktop[] = [
  { id: 1, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.201" },
  { id: 2, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.202" },
  { id: 3, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.203" },
  { id: 4, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.204" },
  { id: 5, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.205" },
  { id: 6, name: "Desktop", mac: "XXXXXXXX", ip: "192.168.0.206" }
];

export function getDesktops(): Desktop[] {
  return desktops;
}

export function getIp(id: number): string | null {
  return desktops.find(d => d.id === id)?.ip ?? null;
}

export function getMac(id: number): string | null {
  return desktops.find(d => d.id === id)?.mac ?? null;
}