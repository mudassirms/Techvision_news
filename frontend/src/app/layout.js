import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MaverickIgnite",
  description: "Enterprise solutions powered by AI and innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-[#050d1b]`}
      >
        {/* Wrapper fills full screen width and keeps background consistent */}
        <div className="w-full bg-[#050d1b]">
          {/* Main content area stays centered & responsive */}
          <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
