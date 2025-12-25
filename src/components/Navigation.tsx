import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Terminal, Users, Menu as MenuIcon } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import sinLogo from "@/assets/sin-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/commands", label: "Commands", icon: Terminal },
    { to: "/group", label: "Group", icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={sinLogo} alt="SIN" className="h-6 w-auto drop-shadow-[0_0_10px_hsl(0_0%_100%_/_0.5)]" />
        </Link>
        
        <div className="flex gap-2">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {links.map(({ to, label, icon: Icon }) => (
              <Button
                key={to}
                variant={location.pathname === to ? "secondary" : "ghost"}
                size="sm"
                asChild
                className={location.pathname === to 
                  ? "bg-foreground/10 border border-foreground/30" 
                  : "hover:bg-foreground/5"
                }
              >
                <Link to={to} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu with Headless UI */}
          <Menu as="div" className="relative md:hidden">
            <MenuButton className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-foreground/30 hover:bg-foreground/5 transition-colors">
              <MenuIcon className="w-5 h-5 text-foreground" />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-card/95 backdrop-blur-md border border-foreground/30 shadow-lg focus:outline-none">
              {links.map(({ to, label, icon: Icon }) => (
                <MenuItem key={to}>
                  {({ focus }) => (
                    <Link
                      to={to}
                      className={`${
                        focus ? 'bg-foreground/10' : ''
                      } ${location.pathname === to ? 'bg-foreground/5' : ''} group flex items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Link>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
