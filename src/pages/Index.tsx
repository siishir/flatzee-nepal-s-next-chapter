import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import UniqueFooter from "@/components/UniqueFooter";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Hero />
        <Features />
        <Newsletter />
        <UniqueFooter />
      </main>
    </PageTransition>
  );
};

export default Index;
