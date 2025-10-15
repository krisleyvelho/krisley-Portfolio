import { useI18nStore } from "@/utils/i18n-state";
import { Languages } from "@/utils/translate";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

export function LanguageSwitch() {
  const { setLanguage, language, currentDictionary } = useI18nStore()

  return (
    <Select defaultValue={language} onValueChange={(value) => setLanguage(value as Languages)}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{currentDictionary['language']}</SelectLabel>
          {Object.keys(Languages).map((key) => {
            const typedKey = key as unknown as keyof typeof Languages
            return (
              <SelectItem key={key} value={key}>{Languages[typedKey]}</SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}