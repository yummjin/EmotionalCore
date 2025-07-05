import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SCDream1 = localFont({
  src: "../../public/fonts/SCDream1.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream1",
});

const SCDream2 = localFont({
  src: "../../public/fonts/SCDream2.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream2",
});

const SCDream3 = localFont({
  src: "../../public/fonts/SCDream3.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream3",
});

const SCDream4 = localFont({
  src: "../../public/fonts/SCDream4.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream4",
});

const SCDream5 = localFont({
  src: "../../public/fonts/SCDream5.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream5",
});

const SCDream6 = localFont({
  src: "../../public/fonts/SCDream6.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream6",
});

const SCDream7 = localFont({
  src: "../../public/fonts/SCDream7.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream7",
});

const SCDream8 = localFont({
  src: "../../public/fonts/SCDream8.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream8",
});

const SCDream9 = localFont({
  src: "../../public/fonts/SCDream9.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-SCDream9",
});

const fontVariables = [
  SCDream1.variable,
  SCDream2.variable,
  SCDream3.variable,
  SCDream4.variable,
  SCDream5.variable,
  SCDream6.variable,
  SCDream7.variable,
  SCDream8.variable,
  SCDream9.variable,
].join(" ");

const fontClassNames = [
  SCDream1.className,
  SCDream2.className,
  SCDream3.className,
  SCDream4.className,
  SCDream5.className,
  SCDream6.className,
  SCDream7.className,
  SCDream8.className,
  SCDream9.className,
].join(" ");

export const metadata: Metadata = {
  title: "감성코어",
  description: "시 및 소설 웹 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="kr" className={fontVariables}>
      <body className={fontClassNames}>{children}</body>
    </html>
  );
}
