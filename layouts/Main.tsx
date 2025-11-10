"use client";

import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import ScrollProgress from "@/components/common/scrollProgress/ScrollProgress";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" data-theme="light">
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

