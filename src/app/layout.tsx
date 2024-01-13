import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Sashank Ghimire",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${ubuntu.className} h-screen bg-[url(/wall.jpg)] bg-cover bg-center bg-no-repeat leading-6`}
      >
        {children}
      </body>
    </html>
  );
}
