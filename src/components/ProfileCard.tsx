import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";
import { ReactNode } from "react";

interface ProfileCardProps {
  name: string | ReactNode;
  role: string;
  image: string;
  telegram?: string;
  roblox?: string;
  delay?: number;
}

const ProfileCard = ({ name, role, image, telegram, roblox, delay = 0 }: ProfileCardProps) => {
  return (
    <div 
      className="relative group animate-slide-up w-full md:w-auto md:flex-1 max-w-xs"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="relative bg-card/70 backdrop-blur-md border-border/30 hover:border-foreground/50 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-foreground/60 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-foreground/60 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-foreground/60 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-foreground/60 rounded-br-lg" />
        
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          {/* Avatar */}
          <div className="relative">
            <img 
              src={image} 
              alt={`${name} profile`}
              className="relative w-28 h-28 rounded-full border-2 border-foreground/60 object-cover shadow-md"
            />
          </div>
          
          {/* Name and role */}
          <div>
            <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
              <span className="text-foreground">•</span>
              <span className="text-foreground">{name}</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-2">{role}</p>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
          
          {/* Socials */}
          {(telegram || roblox) && (
            <div>
              <p className="text-muted-foreground text-xs mb-3">--Socials--</p>
              <div className="flex gap-3 justify-center">
                {telegram && (
                  <a 
                    href={telegram}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-foreground/30 hover:border-foreground flex items-center justify-center transition-all duration-300 hover:shadow-md bg-foreground/5"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-foreground">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>
                )}
                {roblox && (
                  <a 
                    href={roblox}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-foreground/30 hover:border-foreground flex items-center justify-center transition-all duration-300 hover:shadow-md bg-foreground/5"
                  >
                    <Gamepad2 className="w-5 h-5 text-foreground" />
                  </a>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
