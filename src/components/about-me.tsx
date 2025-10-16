import { useI18nStore } from "@/utils/i18n-state";
import { SectionTitle } from "./ui/section-title";

export function AboutMe() {
  const { currentDictionary } = useI18nStore();
  return (
    <div className="bg-white rounded-lg shadow">
      <SectionTitle title={currentDictionary['aboutMe']} />
    </div>
  )
}