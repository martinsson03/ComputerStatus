import { z } from 'zod';

const ipv4Regex =
    /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

const macRegex =
    /^([0-9A-F]{2}:){5}[0-9A-F]{2}$/i



export const DesktopSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1),
  mac: z.string().regex(macRegex,'Invalid MAC address'),
  ip: z.string().regex(ipv4Regex, 'Invalid IPv4 address'),
  linux: z.boolean(),
  username: z.string().min(1),
});

export const DesktopsSchema = z.array(DesktopSchema);
export type Desktop = z.infer<typeof DesktopSchema>;