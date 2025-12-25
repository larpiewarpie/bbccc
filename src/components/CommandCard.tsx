import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CommandCardProps {
  command: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const CommandCard = ({ command, description, icon: Icon, delay = 0 }: CommandCardProps) => {
  return (
    <Card 
      className="bg-card/50 border-border/30 hover:border-foreground/40 transition-all duration-300 shadow-[0_0_30px_hsl(0_0%_100%_/_0.1)] hover:shadow-[0_0_50px_hsl(0_0%_100%_/_0.25)] animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-4 flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-foreground/10 border border-foreground/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <code className="text-foreground font-bold text-lg">{command}</code>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommandCard;
