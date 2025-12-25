import { useState } from "react";
import Navigation from "@/components/Navigation";
import CommandCard from "@/components/CommandCard";
import { 
  Moon, 
  HelpCircle, 
  User, 
  MessageSquare, 
  Trophy, 
  Users, 
  Music, 
  ListMusic, 
  RotateCcw, 
  SkipForward, 
  Square, 
  Wifi, 
  Search,
  Server,
  Eye,
  Video,
  VideoOff
} from "lucide-react";
import sinLogo from "@/assets/sin-logo.png";

const commands = [
  { command: "/afk", description: "Set your status as AFK (Away From Keyboard)", icon: Moon },
  { command: "/help", description: "Display all available bot commands and their usage", icon: HelpCircle },
  { command: "/avatar", description: "Get a user's Discord avatar in full resolution", icon: User },
  { command: "/echo", description: "Make the bot echo your message", icon: MessageSquare },
  { command: "/leaderboard", description: "View the server's activity leaderboard", icon: Trophy },
  { command: "/memberinfo", description: "Get detailed information about a server member", icon: Users },
  { command: "/music", description: "Play music from YouTube or Spotify", icon: Music },
  { command: "/musicqueue", description: "View the current music queue", icon: ListMusic },
  { command: "/musicreplay", description: "Replay the current song from the beginning", icon: RotateCcw },
  { command: "/musicskip", description: "Skip to the next song in the queue", icon: SkipForward },
  { command: "/musicstop", description: "Stop the music and clear the queue", icon: Square },
  { command: "/ping", description: "Check if the bot is online and view latency", icon: Wifi },
  { command: "/profile", description: "View a user's Roblox profile information", icon: Search },
  { command: "/serverinfo", description: "Get detailed information about the server", icon: Server },
  { command: "/snipe", description: "View deleted messages from the last 30 minutes", icon: Eye },
];

const Commands = () => {
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
            Bot Commands
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            All available commands for our Discord bot. Use these to interact with the bot and access various features.
          </p>
        </div>

        {/* Commands grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {commands.map((cmd, index) => (
            <CommandCard
              key={cmd.command}
              {...cmd}
              delay={index * 50}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground text-sm animate-slide-up" style={{ animationDelay: '800ms' }}>
          <p>Prefix: <code className="text-foreground">/</code> (slash commands)</p>
        </div>
      </div>
    </div>
  );
};

export default Commands;
