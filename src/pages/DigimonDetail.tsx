import { useParams, Link, useNavigate } from "react-router-dom";
import { getDigimonById } from "@/data/digimonData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Zap } from "lucide-react";
import { Header } from "@/components/Header";

const DigimonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const digimon = id ? getDigimonById(id) : undefined;

  if (!digimon) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Digimon Not Found</h1>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to List
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to List
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Image */}
          <Card className="overflow-hidden shadow-[var(--shadow-card)]">
            <CardContent className="p-0">
              <div className="aspect-square bg-gradient-to-br from-accent/30 to-background flex items-center justify-center">
                <img
                  src={digimon.image}
                  alt={digimon.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-foreground">{digimon.name}</h1>
              <div className="flex gap-3 flex-wrap mb-4">
                <Badge className="text-sm px-4 py-2 bg-primary text-primary-foreground">
                  {digimon.level}
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  {digimon.type}
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {digimon.attribute}
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">{digimon.description}</p>
            </div>

            {/* Attacks */}
            {digimon.attacks && digimon.attacks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Zap className="w-5 h-5 text-secondary" />
                    Attacks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {digimon.attacks.map((attack) => (
                      <Badge key={attack} variant="outline" className="px-3 py-1">
                        {attack}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Evolution Chain */}
            <div className="grid grid-cols-2 gap-4">
              {/* Prior Forms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Prior Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {digimon.priorForms.map((form) => (
                      <div
                        key={form}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {form}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Forms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Next Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {digimon.nextForms.map((form) => (
                      <div
                        key={form}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {form}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigimonDetail;
