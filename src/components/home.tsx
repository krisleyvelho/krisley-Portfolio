import { useI18nStore } from "@/utils/i18n-state";
import Me from "../assets/me.jpeg";
import { AnimatedText } from "./animated-text";
import { FlagList } from "./flag-list";
import { NavLinks } from "./navBar";
import { Typewriter } from "./ui/typewriter";


export function Home() {
  const { currentDictionary } = useI18nStore();

  return (
    <section className="bg-slate-400 items-center justify-center flex shadow p-6 flex-col transition-all h-full gap-4 dark:bg-background">
      <img
        src={Me}
        alt="Foto de Krisley"
        width={600}
        height={600}
        className="size-80 rounded-full object-cover animate-apearItem "
      />

      <AnimatedText text={currentDictionary['helloMyNameIs']} />
      <AnimatedText text={currentDictionary['welcome']} />
      <Typewriter text={currentDictionary['mySubscription']}
        delay={1000}
        className="max-w-2/3 text-center"
      />
      
      <NavLinks className="flex justify-between gap-4 py-4 animate-apearItem" />
      <FlagList />

    </section>
  )
}