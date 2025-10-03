import { digimonDatabase } from "@/data/digimonData";
import { DigimonCard } from "@/components/DigimonCard";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <Header />
      
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

        {/* Digimon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {digimonDatabase.map((digimon) => (
            <DigimonCard key={digimon.id} digimon={digimon} />
          ))}
        </div>
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
