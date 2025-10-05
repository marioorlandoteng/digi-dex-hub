import { useState, useCallback } from "react";
import { digimonDatabase } from "@/data/digimonData";
import { DigimonCard } from "@/components/DigimonCard";
import { Header } from "@/components/Header";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ITEMS_PER_LOAD = 8;

const Index = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  // Popular digimon (all digimon for the carousel)
  const popularDigimon = digimonDatabase;

  // Browse all with load more
  const visibleDigimon = digimonDatabase.slice(0, visibleCount);
  const hasMore = visibleCount < digimonDatabase.length;

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <Header />
      <MusicPlayer />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Explore the Digital World
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover digital monsters, their evolution paths, and powerful attacks
          </p>
        </div>

        {/* Popular Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Popular Digimon</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {popularDigimon.map((digimon) => (
                <div key={digimon.id} className="flex-[0_0_calc(100%/2)] sm:flex-[0_0_calc(100%/3)] md:flex-[0_0_calc(100%/4)] lg:flex-[0_0_calc(100%/6)] xl:flex-[0_0_calc(100%/8)]">
                  <DigimonCard digimon={digimon} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse All Section */}
        <section>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground">Browse All Digimon</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 mb-8">
            {visibleDigimon.map((digimon) => (
              <DigimonCard key={digimon.id} digimon={digimon} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleLoadMore}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Load More
              </Button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Digital Monster Database - Your guide to the Digital World</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
