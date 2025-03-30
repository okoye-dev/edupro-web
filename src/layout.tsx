import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-full max-w-[80rem] transition-all duration-300">
      {children}
    </div>
  );
}
