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
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary text-primary-foreground">
                {digimon.level}
              </Badge>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {digimon.name}
            </h3>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {digimon.type}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {digimon.attribute}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
