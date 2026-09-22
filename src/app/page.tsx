import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CategoryGrid from "@/components/CategoryGrid";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CategoryGrid />
        <CtaBand />
      </main>
      <Contact />
    </>
  );
}
