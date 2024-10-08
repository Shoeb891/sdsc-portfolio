import { Inter } from "next/font/google";
import Navbar from "./components/navigation/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SDSClub",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>        <Navbar />
        {children}</body>
    </html>
  );
}
