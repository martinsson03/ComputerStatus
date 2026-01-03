import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header"

export const metadata: Metadata = {
  title: "ComputerStatus",
  description: "View the status of your computers.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
