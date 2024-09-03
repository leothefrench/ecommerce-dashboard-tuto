import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
