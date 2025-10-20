import { useI18nStore } from "@/utils/i18n-state";
import Me from "../assets/me.jpeg";
import { AnimatedText } from "./animated-text";
import { FlagList } from "./flag-list";
import { NavLinks } from "./navBar";
import { Typewriter } from "./ui/typewriter";


export function Home() {
  const { currentDictionary } = useI18nStore();

  return (
    <section className="items-center justify-center flex shadow p-6 flex-col transition-all h-full gap-4 bg-gradient-to-b from-slate-600 via-gray-300 to-slate-100 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-neutral-700/45 dark:via-zinc-700">
      <img
        src={Me}
        alt="Foto de Krisley"
        width={600}
        height={600}
        className="size-80 rounded-full object-cover animate-apearItem "
      />

      <AnimatedText text={currentDictionary['helloMyNameIs']} className="text-[2.5rem] "/>
      <AnimatedText text={currentDictionary['welcome']} className="font-normal" />
      <Typewriter text={currentDictionary['mySubscription']}
        delay={1000}
        className="max-w-2/3 text-center"
      />

      <NavLinks className="flex justify-between gap-4 py-4 animate-apearItem" />
      <FlagList />

    </section>
  )
}