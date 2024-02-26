import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watch Anime",
  description: "Find & Watch your favorite Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "black" }}>
        <div style={{ margin: "0 12% 0 12%" }}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
