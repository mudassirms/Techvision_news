import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";  // import here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechVisionary",
  description: "Enterprise solutions powered by AI and innovation",
};

/**
 * @param {{ children: React.ReactNode }} props
 */
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
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider> {/* Wrap everything here */}
            <div className="w-full min-h-screen bg-white dark:bg-[#050d1b] transition-colors duration-300 flex flex-col">
              {/* Global Navbar */}
              <Navbar />

              {/* Main content area */}
              <main role="main" className="flex-grow w-full">
                {children}
              </main>

              {/* Optional Global Footer */}
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
