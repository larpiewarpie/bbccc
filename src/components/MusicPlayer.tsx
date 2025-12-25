import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  autoplay?: boolean;
}

const MusicPlayer = ({ autoplay = false }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    if (autoplay && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [autoplay, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop src="https://files.catbox.moe/mhmfl6.mp3" />
      
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-foreground/30 shadow-[0_0_30px_hsl(0_0%_100%_/_0.2)]">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-foreground/10 border border-foreground/30 flex items-center justify-center hover:bg-foreground/20 hover:shadow-[0_0_20px_hsl(0_0%_100%_/_0.4)] transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-foreground" />
          ) : (
            <Play className="w-5 h-5 text-foreground ml-0.5" />
          )}
        </button>
        
        <div className="flex flex-col">
          <span className="text-foreground text-xs font-bold">Ken Carson</span>
          <span className="text-muted-foreground text-[10px]">The Acronym</span>
        </div>
        
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center hover:bg-foreground/20 transition-all duration-300"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-foreground" />
          ) : (
            <Volume2 className="w-4 h-4 text-foreground" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
