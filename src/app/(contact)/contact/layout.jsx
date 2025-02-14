import Footer from "@/components/Footer";
import "../../../app/globals.css";

export const metadata = {
  title: "Contact Page",
  description: "Layout for the contact page",
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
