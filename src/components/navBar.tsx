import { useIsMobile } from "@/lib/useIsMobile";
import { ROUTES } from "@/utils/constants";
import { useI18nStore } from "@/utils/i18n-state";
import { Languages } from "@/utils/translate";
import { Menu } from "lucide-react";
import { LanguageSwitch } from "./language-switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";

  function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
      <a href={href} className="text-sm font-medium hover:text-blue-600 transition-colors w-full">
        {children}
      </a>
    )
  }
  
  export function NavLinks(_props: React.ComponentProps<"div">) {
    const { className, ...props } = _props
    const { currentDictionary } = useI18nStore()
    return (
      <div className={cn("flex items-center gap-2 font-semibold text-xl", className)} {...props}>
        {Object.entries(ROUTES).map(([key, value]) => (
          <NavLink key={key} href={value.path}>
            {currentDictionary[value.label]}
          </NavLink>
        ))}
      </div>
    )
  }

  export function NavBar({ visible = true }: { visible?: boolean }) {
    const isMobile = useIsMobile();
  
    return (
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-white shadow-sm",
          "transition-transform duration-300 ease-in-out",
          visible ? "translate-y-0" : "-translate-y-full opacity-0 delay-100 hidden"
        )}
      >
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <span>Krisley Velho</span>
          </div>
          {isMobile ? <MobileNavBar /> : <DesktopNavBar />}
        </div>
      </header>
    );
  }

 /*  export function NavBar({ visible = true }: { visible?: boolean }) {
    const isMobile = useIsMobile();
  
    return (
      <header
        className={cn(
          "absolute top-0 z-50 w-full border-b bg-white shadow-sm overflow-hidden",
          "transition-transform duration-300 ease-in-out",
          visible ? "translate-y-0" : "-translate-y-full hidden"
        )}
      >
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <span>Krisley Velho</span>
          </div>
          {isMobile ? <MobileNavBar /> : <DesktopNavBar />}
        </div>
      </header>
    );
  } */
  
 /*  export function NavBar({visible = true}: {visible?: boolean}) {
    const isMobile = useIsMobile();

    if(!visible) return null
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm overflow-hidden">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <span>Krisley Velho</span>
          </div>
          {isMobile ? <MobileNavBar /> : <DesktopNavBar />}
          
        </div>
      </header>
    )
  } */
  
  export function DesktopNavBar() {
    return (
      <>
        <nav className="flex items-center gap-6 mx-8">
          <NavLinks />
        </nav>
        <div className="ml-auto">
          <LanguageSwitch />
        </div>
      </>
    )
  }
  
  function MobileNavBar() {
    const { currentDictionary, setLanguage } = useI18nStore()
    return (
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              {Object.entries(ROUTES).map(([key, value]) => (
                <DropdownMenuItem key={key}>
                  <NavLink href={value.path}>{currentDictionary[value.label]}</NavLink>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>{currentDictionary['language']}</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {Object.keys(Languages).map((key) => (
                      <DropdownMenuItem 
                        key={key}
                        onClick={() => setLanguage(Languages[key as keyof typeof Languages])}
                      >
                        {Languages[key as keyof typeof Languages]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    )
  }
