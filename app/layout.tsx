import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { ModeToggle } from "@/components/mode-toggle";
import Nav from "@/components/nav";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Icon } from "@/components/ui/icon";
import { TypewriterEffect } from "@/components/ui/typewritter";
import Footer from "@/components/footer";
import Main from "@/components/main";

export const metadata: Metadata = {
  title: "phema.dev",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Main>
            {children}
          </Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
