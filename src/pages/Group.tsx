import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gamepad2, MessageCircle, Video, VideoOff } from "lucide-react";
import sinLogo from "@/assets/sin-logo.png";

const Group = () => {
  const [videoEnabled, setVideoEnabled] = useState(true);

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

      {/* Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-10 scanlines opacity-30" />

      <Navigation />

      <div className="relative z-20 container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6 relative">
            <div className="absolute inset-0 blur-[40px] bg-foreground/20 animate-pulse scale-150" />
            <img src={sinLogo} alt="SIN" className="relative h-32 md:h-44 w-auto drop-shadow-[0_0_50px_hsl(0_0%_100%_/_0.8)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground drop-shadow-[0_0_30px_hsl(0_0%_100%_/_0.5)] mb-4">
            Our Group
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join our community on Roblox and Discord.
          </p>
        </div>

        {/* Link cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          {/* Roblox Card */}
          <Card className="bg-card/50 border-border/30 hover:border-foreground/40 transition-all duration-300 shadow-[0_0_30px_hsl(0_0%_100%_/_0.1)] hover:shadow-[0_0_50px_hsl(0_0%_100%_/_0.25)] animate-slide-up">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-foreground" />
              </div>
              <CardTitle className="text-foreground">Roblox Group</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Join our Roblox group for exclusive updates and events.
              </p>
              <Button 
                variant="outline" 
                className="border-foreground/30 hover:border-foreground hover:bg-foreground/10"
                asChild
              >
                <a href="https://www.roblox.com/communities/35177141/SIN-SINISTER#!/about" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Group
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Discord Card */}
          <Card 
            className="bg-card/50 border-border/30 hover:border-foreground/40 transition-all duration-300 shadow-[0_0_30px_hsl(0_0%_100%_/_0.1)] hover:shadow-[0_0_50px_hsl(0_0%_100%_/_0.25)] animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-foreground" />
              </div>
              <CardTitle className="text-foreground">Discord Server</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Join our Discord server to chat with the community.
              </p>
              <Button 
                variant="outline" 
                className="border-foreground/30 hover:border-foreground hover:bg-foreground/10"
                asChild
              >
                <a href="https://discord.gg/km4fAAt9kZ" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Discord
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Info text */}
        <div 
          className="text-center mt-12 text-muted-foreground text-sm animate-slide-up" 
          style={{ animationDelay: '300ms' }}
        >
          <p className="border-t border-foreground/20 pt-4 max-w-md mx-auto">
            Join our community on Roblox and Discord to stay updated with the latest news and events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Group;
