import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Trophy,
  AlertTriangle,
  MessageCircle,
  Calendar,
  GraduationCap,
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Gamification", href: "/gamification", icon: Trophy },
    { name: "Risk Analysis", href: "/risk-prediction", icon: AlertTriangle },
    { name: "Counseling", href: "/counseling", icon: MessageCircle },
    { name: "Attendance", href: "/attendance", icon: Calendar },
    { name: "Academic", href: "/academic", icon: GraduationCap },
  ];

  return (
    <nav className="bg-card border-b shadow-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EduTrack
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;