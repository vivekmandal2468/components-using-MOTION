import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const switchTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label="Toggle color theme"
      className="size-4 flex items-center justify-center relative cursor-pointer"
    >
      <SunIcon
        size={16}
        className="rotate-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0 absolute inset-0"
      />
      <MoonIcon
        size={16}
        className="rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100 absolute inset-0"
      />
    </button>
  );
}
