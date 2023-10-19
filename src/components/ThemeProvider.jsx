"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      enableSystem={false}
      disableTransitionOnChange
      defaultTheme="light"
      themes={["light", "dark", "lime", "wood"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
