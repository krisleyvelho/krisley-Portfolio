import { getTimeIntervalText } from "@/utils/date-formater";
import { useI18nStore } from "@/utils/i18n-state";

type ExperienceDisplayProps = {
  startDate: Date;
};

export default function ExperienceCounter({
  startDate
}: ExperienceDisplayProps) {
  const { currentLocale } = useI18nStore();
  return (
    <div className={`bg-primary-foreground h-fit p-4`}> 
    <p>{getTimeIntervalText(startDate, new Date(), currentLocale)}</p>
    </div>
  );
}