import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="mx-auto gradient_background w-[1294px]">
      <div className="w-[73rem] mx-auto">
        <section id="header" className="snap-start">
          <Header />
        </section>
        <section id="hero" className="snap-start">
          <Hero />
        </section>
      </div>
      {/* 
        <Products />
        <ExpertsSection />
        <SupportSection />
        <ContactUs />  */}
    </main>
  );
}
