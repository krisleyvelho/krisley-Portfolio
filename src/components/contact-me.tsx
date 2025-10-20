import { useI18nStore } from "@/utils/i18n-state";
import { Copy, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { CustomTooltipContent } from "./ui/tooltip";

const SOCIALS = [
  {
    name: "Email",
    url: "mailto:krisleyvelho@gmail.com",
    icon: Mail,
    value: "krisleyvelho@gmail.com"
  },
  {
    name: "Github",
    url: "https://github.com/krisleyvelho",
    icon: "/github.svg",
    value: "krisleyvelho"
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/krisleyvelho/",
    icon: "/linkedin.svg",
    value: "krisleyvelho"
  },
  {
    name: "Whatsapp",
    url: "https://api.whatsapp.com/send?phone=5548996985323?text=Olá%20Krisley%20%F0%9F%98%8D",
    icon: "/whatsapp.svg",
    value: "+5548996985323"
  }

];

function SocialIcon({ icon }: { icon: string | any }) {
  if (typeof icon === 'string') {
    return (
      <img src={icon} alt="social icon" className="w-5 h-5" />
    )
  }
  const IconComponent = icon;
  return (
    <IconComponent className="size-5" />
  )
}

export function ContactMe() {
  const { currentDictionary } = useI18nStore();

  return (
    <Card title={currentDictionary['contact']} id="contactMe">
      <div className="flex gap-4 items-center justify-between flex-col py-4 sm:flex-row sm:justify-center">
        {SOCIALS.map((social) => (
          <div key={social.name} className="flex items-center justify-between w-full sm:w-fit gap-2">
            <a href={social.url} target="_blank" rel="noreferrer">
              <div className="flex items-center gap-2">
                <SocialIcon icon={social.icon} />
                <span className="text-muted-foreground">{social.name}</span>
              </div>
            </a>
            <CustomTooltipContent value={social.value}>
              <Copy className="size-3 cursor-pointer" onClick={() => navigator.clipboard.writeText(social.value)} />
            </CustomTooltipContent>

          </div>
        ))}
      </div>
    </Card>
  )
}