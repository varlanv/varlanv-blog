import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/head/Header";
import { addArticle } from "@/components/feed/Articles";
import GradleTestSyncPlugin from "@/components/articles/GradleTestSyncPlugin";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vlad's Blog About Things",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-gray-200 antialiased`}
      >
        <div className={"flex flex-row items-center justify-center"}>
          <div className={"mt-4 w-[800px]"}>
            <Header />
            <main className={"prose prose-invert"}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

addArticle(GradleTestSyncPlugin);

export default RootLayout;
