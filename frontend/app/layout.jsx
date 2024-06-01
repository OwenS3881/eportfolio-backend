import "./globals.css";

export const metadata = {
  title: "Owen's ePortfolio",
  description: "ePortfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
