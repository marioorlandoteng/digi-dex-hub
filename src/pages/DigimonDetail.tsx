import { useParams, Link, useNavigate } from "react-router-dom";
import { getDigimonById } from "@/data/digimonData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Zap, Palette, BookOpen, Tv } from "lucide-react";
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

        <div className="grid md:grid-cols-[350px_1fr] gap-8 h-[calc(100vh-200px)]">
          {/* Left Side - Image and Evolution */}
          <div className="space-y-4">
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
                      <Link
                        key={form}
                        to={`/digimon/${form.toLowerCase()}`}
                        className="block text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        {form}
                      </Link>
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
                      <Link
                        key={form}
                        to={`/digimon/${form.toLowerCase()}`}
                        className="block text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        {form}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Scrollable Details */}
          <ScrollArea className="h-full pr-4">
            <div className="space-y-6 pb-8">
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

              {/* Design Section */}
              {digimon.design && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Palette className="w-5 h-5 text-secondary" />
                      Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{digimon.design}</p>
                  </CardContent>
                </Card>
              )}

              {/* Etymologies Section */}
              {digimon.etymologies && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      Etymologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{digimon.etymologies}</p>
                  </CardContent>
                </Card>
              )}

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
                    <div className="space-y-3">
                      {digimon.attacks.map((attack) => (
                        <div key={attack.name} className="border-l-2 border-primary pl-3">
                          <h4 className="font-semibold text-foreground mb-1">{attack.name}</h4>
                          <p className="text-sm text-muted-foreground">{attack.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Appearances Section */}
              {digimon.appearances && digimon.appearances.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Tv className="w-5 h-5 text-secondary" />
                      Appearances
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {digimon.appearances.map((appearance) => (
                        <Badge key={appearance} variant="outline" className="text-sm">
                          {appearance}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DigimonDetail;
