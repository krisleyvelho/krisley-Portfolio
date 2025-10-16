import { useI18nStore } from "@/utils/i18n-state";
import { FLAG_BY_LANGUAGE, Languages } from "@/utils/translate";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { FlagRender } from "./ui/flag-render";

export function LanguageSwitch() {
  const { setLanguage, language, currentDictionary } = useI18nStore()

  return (
    <Select onValueChange={(value) => setLanguage(value as Languages)} value={language}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{currentDictionary['language']}</SelectLabel>
          {Object.keys(Languages).map((key) => {
            const typedKey = key as unknown as keyof typeof Languages
            return (
              <SelectItem key={key} value={key}><FlagRender flag={FLAG_BY_LANGUAGE[typedKey]} alt={typedKey} /> {Languages[typedKey]}</SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}