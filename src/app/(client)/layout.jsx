import "../../app/globals.css";
import StarryBackground from "@/components/starryBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {AuthProvider} from "../../../utils/AuthProvider";


export const metadata = {
  title: "SpaceForDevelopers",
  icons: {
    icon: "/LOGO2.jpg",
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
      className="antialiased">
        <StarryBackground/>
        <AuthProvider>
          <Header/>
          {children}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
