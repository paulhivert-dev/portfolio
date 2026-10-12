import Header from "@/components/Header";
import HeroDecor from "@/components/HeroDecor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CategoryGrid from "@/components/CategoryGrid";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroDecor />
      <Header />
      <main>
        <Hero decor />
        <About />
        <CategoryGrid />
        <CtaBand />
      </main>
      <Contact />
    </>
  );
}
