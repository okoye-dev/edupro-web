import { ReactNode } from "react";
import { useTheme } from "@/shared/context/ThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`mx-auto w-full max-w-[80rem] transition-all duration-300 ${
        theme === "dark" ? "dark" : ""
      }`}
      style={{ backgroundColor: "var(--dark-background)" }}
    >
      {children}
    </div>
  );
}
