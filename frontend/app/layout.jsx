import "./styles/globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Owen's ePortfolio",
  description: "ePortfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
