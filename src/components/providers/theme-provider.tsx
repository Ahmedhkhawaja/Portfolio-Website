"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export type AccentId = "lavender";

export type AccentPreset = {
  id: AccentId;
  label: string;
  description: string;
};

const ACCENTS: AccentPreset[] = [
  {
    id: "lavender",
    label: "Lavender",
    description: "Soft lavender accents on neutral foundations.",
  },
];

type AccentContextValue = {
  accent: AccentId;
  accents: AccentPreset[];
  setAccent: (accent: AccentId) => void;
};

const AccentContext = React.createContext<AccentContextValue | null>(null);

function applyAccent(accent: AccentId) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.accent = accent;
}

function getStoredAccent(): AccentId | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("accent");
  return raw === "lavender" ? "lavender" : null;
}

export function useAccent() {
  const ctx = React.useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used within ThemeProvider");
  return ctx;
}

function AccentProvider({
  children,
  defaultAccent = "lavender",
}: {
  children: React.ReactNode;
  defaultAccent?: AccentId;
}) {
  const [accent, setAccentState] = React.useState<AccentId>(defaultAccent);

  React.useEffect(() => {
    const stored = getStoredAccent();
    const next = stored ?? defaultAccent;
    setAccentState(next);
    applyAccent(next);
  }, [defaultAccent]);

  const setAccent = React.useCallback((next: AccentId) => {
    setAccentState(next);
    applyAccent(next);
    try {
      window.localStorage.setItem("accent", next);
    } catch {
      // ignore
    }
  }, []);

  const value = React.useMemo<AccentContextValue>(
    () => ({ accent, accents: ACCENTS, setAccent }),
    [accent, setAccent],
  );

  return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <AccentProvider>{children}</AccentProvider>
    </NextThemesProvider>
  );
}

