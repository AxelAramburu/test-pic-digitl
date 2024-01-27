import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Menu from "./Menu";

const montserrat = Montserrat({
  weight: ['300','600'],
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Find the product you want !",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={`capitalize font-montserrat font-semibold ${montserrat.variable}`}>
        <Menu/>
        <main>{children}</main>
      </body>
    </html>
  );
}
