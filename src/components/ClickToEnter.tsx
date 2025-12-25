import { Dialog, DialogPanel } from "@headlessui/react";
import sinLogo from "@/assets/sin-logo.png";

interface ClickToEnterProps {
  onClick: () => void;
}

const ClickToEnter = ({ onClick }: ClickToEnterProps) => {
  return (
    <Dialog open={true} onClose={onClick} className="relative z-50">
      <div className="fixed inset-0 bg-background" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="flex flex-col items-center justify-center gap-8 cursor-pointer" onClick={onClick}>
          {/* Logo - Big */}
          <div className="relative">
            <div className="absolute inset-0 blur-[60px] bg-foreground/40 animate-pulse scale-150" />
            <img 
              src={sinLogo} 
              alt="SIN" 
              className="relative h-40 md:h-56 w-auto drop-shadow-[0_0_60px_hsl(0_0%_100%_/_0.9)]"
            />
          </div>

          <div className="relative">
            <div className="relative text-2xl md:text-4xl">
              <span 
                className="relative z-10 text-foreground font-bold glitch" 
                data-text="Click to enter"
                style={{ textShadow: '0 0 20px hsl(0 0% 100% / 0.6)' }}
              >
                Click to enter
              </span>
            </div>
            
            {/* Pulsing underline */}
            <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-foreground/60 to-transparent animate-pulse" />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ClickToEnter;
