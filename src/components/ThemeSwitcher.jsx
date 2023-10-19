"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div className="flex space-x-4">
      <Button data-testid="light" onClick={() => setTheme("light")}>
        Light
      </Button>
      <Button data-testid="dark" onClick={() => setTheme("dark")}>
        {" "}
        Dark
      </Button>
      <Button data-testid="lime" onClick={() => setTheme("lime")}>
        Lime
      </Button>
      <Button data-testid="wood" onClick={() => setTheme("wood")}>
        Wood
      </Button>
    </div>
  );
}
