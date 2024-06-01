import "./styles/globals.css";

import Nav from "./components/Nav";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Owen's ePortfolio",
  description: "ePortfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
