import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // ✅ Import your custom cursor styles
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/components/CustomCursor"; // ✅ Your custom React 19 cursor


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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black bg-white dark:text-white dark:bg-[#050d1b] transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >

          <CustomCursor /> {/* ✨ Your custom animated cursor */}
          <div className="w-full h-full bg-white dark:bg-[#050d1b] transition-colors duration-300">
            <main className="w-full h-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
