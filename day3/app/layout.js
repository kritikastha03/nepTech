import "./globals.css";
import Header from "./components/navbar";
import Footer from "./components/footer";

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