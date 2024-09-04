import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { Sidebar } from "@/components/navigation/Sidebar";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"], 
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: 'Dashboard Orders',
  description: 'E-commerce Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex">
            <Sidebar />
            <section className="min-h-screen flex-1">
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
