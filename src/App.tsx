import { useRef } from "react";
import { AboutMe } from "./components/about-me";
import { ContactMe } from "./components/contact-me";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { NavBar } from "./components/navBar";
import { ToggleTheme } from "./components/toggleTheme";
import { useScrollDirection } from "./lib/useScrollDirection";

function App() {
  const ref = useRef<HTMLElement | null>(null);
  const navBarVisible = useScrollDirection(ref, { threshold: 10 });

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden" >
        <ToggleTheme /> 
      <main className="flex-1 overflow-y-auto" ref={ref}>
        <Home />
        <NavBar visible={navBarVisible} />
        <div className="flex flex-col px-4 gap-2">

        <AboutMe />
        <Experiences />
        <ContactMe />
        </div>

      <Footer />
      </main>
    </div>
  )
}

export default App
