import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Always start with light theme
    localStorage.setItem("theme", "light");
    setIsDarkMode(false);
  }, []);

  const toggleTheme = () => {
    // Toggle between light modes or keep light
    setIsDarkMode(false);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {/* Always show moon for light mode */}
      <Moon className="h-6 w-6 text-slate-500" />
    </button>
  );
};