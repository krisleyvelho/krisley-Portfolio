import { useTheme } from "@/hooks/useTheme";
import { SunMoon } from "lucide-react";
import { Switch } from "./ui/switch";

export function ToggleTheme() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className="flex items-center">
      <SunMoon className="size-5" />
      <Switch onCheckedChange={() => toggleTheme()} defaultChecked={theme === 'dark'} />
    </div>
  )
}