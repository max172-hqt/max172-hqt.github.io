import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="text-center inline-flex items-center justify-end hover:text-amber-600 transition ease-in-out duration-300 text-2xl dark:text-slate-200"
    >
      {currentTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}
