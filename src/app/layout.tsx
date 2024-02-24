import Head from "next/head";
import "./global.css";
export const metadata = {
  title: "Your Portfolio 📄",
  description: "A Social Platform For Developers & Coders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
