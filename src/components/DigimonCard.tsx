import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Digimon } from "@/data/digimonData";

interface DigimonCardProps {
  digimon: Digimon;
}

export const DigimonCard = ({ digimon }: DigimonCardProps) => {
  return (
    <Link to={`/digimon/${digimon.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 bg-card border-border group">
        <CardContent className="p-0">
          <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-accent/20 to-background">
            <img
              src={digimon.image}
              alt={digimon.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-1 right-1">
              <Badge className="bg-primary text-primary-foreground text-[8px] px-1 py-0">
                {digimon.level}
              </Badge>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-sm font-bold mb-0.5 text-foreground group-hover:text-primary transition-colors truncate">
              {digimon.name}
            </h3>
            {digimon.kanji && (
              <p className="text-[10px] text-muted-foreground mb-1 truncate">{digimon.kanji}</p>
            )}
            <div className="flex gap-1 flex-wrap">
              <Badge variant="outline" className="text-[9px] px-1.5 py-0.5">
                {digimon.type}
              </Badge>
              <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5">
                {digimon.attribute}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
