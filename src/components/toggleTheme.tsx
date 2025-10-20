import { useTheme } from "@/utils/useTheme";
import { Switch } from "./ui/switch";
import { SunMoon } from "lucide-react";

export function ToggleTheme() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className=" right-1/12 absolute top-5 z-50 rounded-full shadow w-fit p-2">
      <div className="flex items-center ">

      <SunMoon className="size-5"/>
      <Switch onCheckedChange={() => toggleTheme()} defaultChecked={theme === 'dark'} />
      </div>
    </div>
  )
}