import { Bell, ChevronDown, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Order Book", path: "/orderbook" },
  { label: "Positions", path: "/positions" },
  { label: "Holdings", path: "/holdings" },
  { label: "Mutual Funds", path: "/mutualfunds" },
  { label: "Settings", path: "/settings" },
  { label: "Strategy Builder", path: "/strategy-builder" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-10 py-4">
      {/* Left */}
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center shrink-0">
          <img src="/gopocket.png" alt="GoPocket" className="h-7 w-auto object-contain" />
        </Link>
        <nav className="flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm cursor-pointer transition-colors ${isActive
                  ? "font-medium text-foreground underline underline-offset-[12px] decoration-[1.5px]"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Saved</span>
        <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Lists</span>
        <button className="flex items-center gap-1.5 text-sm font-medium border border-foreground rounded-full px-4 py-1.5 hover:bg-foreground/5 transition-colors">
          Generate <Sparkles className="h-3.5 w-3.5" />
        </button>
        <button className="relative text-foreground">
          <Bell className="h-5 w-5" fill="currentColor" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary" />
        </button>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Avatar className="h-9 w-9 border-2 border-border">
            <AvatarFallback className="bg-foreground text-card text-xs font-semibold">WS</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Wilbur Stroman</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
