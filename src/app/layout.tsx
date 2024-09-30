import type { Metadata } from "next";
import "./globals.css";
import { getTotalExp } from "./utills/helper";

export const metadata: Metadata = {
  title: "Farukh Patel",
  description: `Farukh Patel is a MERN Stack Developer with ${getTotalExp()} years of experience, specializing in frontend development using React.js. Passionate about building efficient and scalable web applications, with expertise in JavaScript, Next.js, and modern UI/UX practices.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
