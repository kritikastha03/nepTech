import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className="flex  flex-col gap-4">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
