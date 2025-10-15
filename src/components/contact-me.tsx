import { useI18nStore } from "@/utils/i18n-state";
import { SectionTitle } from "./ui/section-title";
import { Github, Linkedin, MessageCircleMore } from "lucide-react";

const SOCIALS = [
  {
    name: "Github",
    url: "https://github.com/krisleyvelho",
    icon: "github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/krisleyvelho/",
    icon: "linkedin",
  },
  {
    name: "Whatsapp",
    url: "https://api.whatsapp.com/send?phone=5548996985323?text=Olá%20Krisley%20%F0%9F%98%8D",
    icon: "whatsapp",
  }
  /* {
    name: "Twitter",
    url: "https://twitter.com/krisleyvelho",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/krisleyvelho/",
    icon: "instagram",
  }, */
];

const icons = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircleMore,
}

export function ContactMe() {
  const { currentDictionary } = useI18nStore();
  return (
    <div className="bg-white rounded-lg shadow" id="#contact">
      <SectionTitle title={currentDictionary['contact']} />
      <div className="divide-y">
        {SOCIALS.map((social) => (
          <div key={social.name} className="flex items-center justify-between">
            <a href={social.url} target="_blank" rel="noreferrer">
              <div className="flex items-center gap-2">
                {/* <icons[social.icon] className="size-5 text-muted-foreground" /> */}
                <span className="text-muted-foreground">{social.name}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}