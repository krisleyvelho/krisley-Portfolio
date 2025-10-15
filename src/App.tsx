import { useRef } from "react";
import { AnimatedText } from "./components/animated-text";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { NavBar, NavLinks } from "./components/navBar";
import { Typewriter } from "./components/ui/typewriter";
import { useScrollDirection } from "./lib/useScrollDirection";
import { cn } from "./lib/utils";
import { useI18nStore } from "./utils/i18n-state";
import Me from "./assets/me.jpeg";
import { AboutMe } from "./components/about-me";
import { ContactMe } from "./components/contact-me";

function App() {
  const ref = useRef(null);
  const { currentDictionary } = useI18nStore();
  const navBarVisible = useScrollDirection(ref, { threshold: 10 });

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden" >
      {/* {!atTop && <NavBar />} */}
      <main className="flex-1 overflow-y-auto" ref={ref}>
        <section className={cn("bg-slate-400 items-center justify-center flex shadow p-6 flex-col transition-all h-full gap-4",)}>
          <img
            src={Me}
            alt="Foto de Krisley"
            width={600}
            height={600}
            className="size-80 rounded-full object-cover animate-apearItem"
          />

          <AnimatedText text={"Olá, meu nome é Krisley"} />
          <AnimatedText text={currentDictionary['welcome']} />
          <Typewriter text="Desenvolvedor Front-end focado em React e experiências intuitivas."
            delay={1000}
            className="max-w-2/3 text-center"
          />
          <NavLinks className="flex justify-between gap-4 py-4 animate-apearItem" />

        </section>
        <NavBar visible={navBarVisible} />

        <Experiences />
        <AboutMe />
        <ContactMe />

      </main>
    </div>
  )
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 overflow-y-auto" ref={ref}>
        <div className="container mx-auto px-6 py-8">
          {/*  <AboutMe />
          <Experiences /> */}

          {/*    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Gráfico de Desempenho</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">Área do Gráfico</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Estatísticas</h3>
              <div className="space-y-4">
                {['Métrica A', 'Métrica B', 'Métrica C', 'Métrica D'].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{m}</span>
                      <span className="font-medium">{75 + i * 5}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${75 + i * 5}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
