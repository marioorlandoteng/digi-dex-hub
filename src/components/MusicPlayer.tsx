import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Music, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const playlists = [
  { id: "digimon1", name: "Digimon Adventure", url: "/music/digimon-theme.mp3" },
  { id: "digimon2", name: "Digimon Adventure 02", url: "/music/digimon-theme.mp3" },
  { id: "digimon3", name: "Digimon Tamers", url: "/music/digimon-theme.mp3" },
  { id: "digimon4", name: "Brave Heart", url: "/music/digimon-theme.mp3" },
];

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlaylist = (name: string, url: string) => {
    setCurrentTrack(name);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTrack("");
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 flex items-center gap-2">
      <audio ref={audioRef} loop />
      
      {isPlaying && currentTrack && (
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-spin" style={{ animationDuration: "2s" }}>
              <div className="absolute inset-1 bg-card rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-foreground">{currentTrack}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={handleStop}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <Music className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {playlists.map((playlist) => (
            <DropdownMenuItem
              key={playlist.id}
              onClick={() => handlePlaylist(playlist.name, playlist.url)}
              className="cursor-pointer"
            >
              <Music className="mr-2 h-4 w-4" />
              {playlist.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
