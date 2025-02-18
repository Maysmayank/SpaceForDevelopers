import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import StarryBackground from "@/components/starryBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export const metadata = {
  title: "SpaceForDevelopers",
  icons: {
    icon: "/LOGO2.jpg",
  },
};

export default function AuthLayout({ children }:any) {
  return (
    <html lang="en">
      <body
      className="antialiased">

          {children}
      </body>
    </html>
  );
}
