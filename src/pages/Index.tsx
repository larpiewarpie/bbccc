import { useState, useEffect } from "react";
import ProfileCard from "@/components/ProfileCard";
import ClickToEnter from "@/components/ClickToEnter";
import Navigation from "@/components/Navigation";
import { Video, VideoOff } from "lucide-react";
import sinLogo from "@/assets/sin-logo.png";
import zPfp from "@/assets/z-pfp.png";
import eddiePfp from "@/assets/eddie-pfp.png";
import tnPfp from "@/assets/tn-pfp.png";

const teamMembers = [
  {
    id: "eddie",
    name: "eddie",
    role: "Co-Owner",
    image: eddiePfp,
    roblox: "https://www.roblox.com/users/124933007/profile",
  },
  {
    id: "z",
    name: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 16H10L6 20H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 4H11L4 12H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 9H20L14 15H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    role: "Owner",
    image: zPfp,
    roblox: "https://www.roblox.com/users/180567909/profile",
  },
  {
    id: "tn",
    name: "TN",
    role: "Co-Owner",
    image: tnPfp,
    roblox: "https://www.roblox.com/users/820793952/profile",
  },
];

interface IndexProps {
  onEnter?: () => void;
}

const Index = ({ onEnter }: IndexProps) => {
  const [entered, setEntered] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const handleEnter = () => {
    setEntered(true);
    onEnter?.();
  };

  if (!entered) {
    return <ClickToEnter onClick={handleEnter} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {videoEnabled ? (
          <>
            <img
              src="https://media.discordapp.net/attachments/1388806859124768851/1450916456979107871/sin.gif?ex=694446c0&is=6942f540&hm=83417885553cca4c35b8a7be820f19ed091a8943cfec1febfdcb5a87b27b82d4&="
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover blur-md"
            />
            {/* Dark overlay to maintain readability */}
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-background" />
        )}
      </div>

      {/* Video toggle button */}
      <button
        onClick={() => setVideoEnabled(!videoEnabled)}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-foreground/30 flex items-center justify-center hover:bg-foreground/10 transition-all duration-300 shadow-lg"
        aria-label="Toggle video background"
      >
        {videoEnabled ? (
          <Video className="w-5 h-5 text-foreground" />
        ) : (
          <VideoOff className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Scanlines overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 scanlines opacity-30" />

      <Navigation />

      {/* Main content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 py-24">
        {/* Hero logo - Big */}
        <div className="mb-12 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 blur-[50px] bg-foreground/30 animate-pulse scale-150" />
            <img 
              src={sinLogo} 
              alt="SIN" 
              className="relative h-36 md:h-52 w-auto drop-shadow-[0_0_60px_hsl(0_0%_100%_/_0.9)]"
            />
          </div>
        </div>

        {/* Team cards - centered */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mb-12 justify-center items-center">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={member.id}
              {...member}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Footer warning */}
        <div 
          className="text-center text-muted-foreground text-xs md:text-sm max-w-2xl space-y-4 animate-slide-up"
          style={{ animationDelay: '600ms' }}
        >
          <p className="border-t border-foreground/20 pt-4">
            These are our only socials, beware of impersonators.
          </p>
          <div className="space-y-2">
            <p>The current active domains are:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <a 
                href="https://sinw.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1 border border-foreground/30 rounded hover:border-foreground hover:bg-foreground/10 hover:shadow-[0_0_30px_hsl(0_0%_100%_/_0.3)] transition-all duration-300"
              >
                sinw.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
