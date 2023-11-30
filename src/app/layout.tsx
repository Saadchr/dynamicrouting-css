import { Theme, ThemePanel, Flex } from "@radix-ui/themes";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import ThemeProviding from "../components/ThemeProviding";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`relative ${inter.className}`}>
        <ThemeProviding>
          <Theme className="min-h-full">
            <Flex
              display={"inline-flex"}
              justify={"start"}
              p={"0"}
              m={"0"}
              direction={"column"}
              className="min-h-full"
            >
              <Header />
              {children}
              <Footer />
            </Flex>
          </Theme>
        </ThemeProviding>
      </body>
    </html>
  );
}
