"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Check, Moon, Palette, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAccent } from "@/components/providers/theme-provider";

export function ThemeSwitcher({
  className,
  showAccent = true,
}: {
  className?: string;
  showAccent?: boolean;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const { accent, accents, setAccent } = useAccent();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Button type="button" variant="outline" size="icon" aria-label="Toggle theme" disabled>
          <Moon className="h-4 w-4" />
        </Button>
        {showAccent ? (
          <Button type="button" variant="outline" className="gap-2" aria-label="Accent" disabled>
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm" />
            <span className="hidden sm:inline">Accent</span>
            <Palette className="h-4 w-4 opacity-70" />
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      {showAccent ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="outline" className="gap-2">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm"
              />
              <span className="hidden sm:inline">Accent</span>
              <Palette className="h-4 w-4 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Accent</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {accents.map((p) => (
              <DropdownMenuItem
                key={p.id}
                onClick={() => setAccent(p.id)}
                className="flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{p.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {p.description}
                  </span>
                </div>
                <Check
                  className={cn(
                    "h-4 w-4",
                    accent === p.id ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
}

