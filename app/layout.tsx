import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComputerStatus",
  description: "View the status of your computers.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
