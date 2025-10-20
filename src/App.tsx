import { useEffect, useRef } from "react";
import { AboutMe } from "./components/about-me";
import { ContactMe } from "./components/contact-me";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { NavBar } from "./components/navBar";
import { ToggleTheme } from "./components/toggleTheme";
import { useScrollDirection } from "./hooks/useScrollDirection";
import { Projects } from "./components/projects";
import { ROUTES, type RouteKeysType } from "./utils/routes";

function App() {
  const ref = useRef<HTMLElement | null>(null);
  const navBarVisible = useScrollDirection(ref, { threshold: 10 });

  const currentHash = window.location.hash;
  useEffect(() => {
    // return to current section on page load or reload
    if (currentHash) {
      const currentRoute = ROUTES[currentHash.replace("#", "") as  RouteKeysType];
      if (currentRoute) {
        const element = document.getElementById(currentRoute.label);
        if (element) {
          element.scrollIntoView();
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden" >
      <div className=" right-1/12 absolute top-5 z-50 rounded-full shadow w-fit p-2">
        <ToggleTheme />
      </div>
      <main className="flex-1 overflow-y-auto" ref={ref}>
        <Home />
        <NavBar visible={navBarVisible} />
        <div className="flex flex-col px-4 gap-2">

          <AboutMe />
          <Experiences />
          <Projects />
          <ContactMe />
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default App
