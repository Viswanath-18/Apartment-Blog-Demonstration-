import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* scroll behaviour only on home */}
      <Header enableScrollBehavior={isHome} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
