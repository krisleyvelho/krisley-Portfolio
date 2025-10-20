

import { FLAG_BY_LANGUAGE, type Languages } from "@/utils/translate"
import { FlagRender } from "./ui/flag-render"
import { Button } from "./ui/button"
import { useI18nStore } from "@/utils/i18n-state"


export function FlagList() {
  const { setLanguage, } = useI18nStore()
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {Object.entries(FLAG_BY_LANGUAGE).map(([key, flagUrl]) => {
        const typedKey = key as Languages
        return (
          <Button key={key} onClick={() => setLanguage(typedKey)} className="cursor-pointer bg-red-300 w-fit" variant={'link'}>
            <FlagRender flag={flagUrl} alt={key} />
          </Button>
        )
      })}
    </div>
  )
}