import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Header />
      <Hero />
      <Services />
      <FeaturedWork />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
