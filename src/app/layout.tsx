import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "../components/Navbar";

import "./globals.css";

export const metadata = {
  title: "Themeable App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
