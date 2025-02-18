import Footer from "@/components/Footer";
import "../../../app/globals.css";

export const metadata = {
  title: "SpaceForDevelopers",
  icons: {
    icon: "/LOGO2.jpg",
  },
};
export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
