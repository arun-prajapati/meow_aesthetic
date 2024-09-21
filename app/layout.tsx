import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextTopLoader from "nextjs-toploader";

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata: Metadata = {
  title: "Meow Aesthetic Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={questrial.className}>
        <NextTopLoader color="#043D59" />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
