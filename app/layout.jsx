import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OTR: Interactive Guidebook",
  description: "On the rocks Interactive Indoor Guidebooks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg0`}>
        <div className="fixed right-0 top-0 mt-14 rounded-bl-lg bg-bg0 p-1 text-xs text-white outline outline-red-500">
          Demo(WIP)
        </div>
        <NavBar />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
