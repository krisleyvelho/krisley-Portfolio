import { useI18nStore } from "@/utils/i18n-state";
import { formatDuration, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";


type ExperienceDisplayProps = {
  startDate: Date;
};

function TimeIntervalText({ startDate, endDate }: { startDate: Date, endDate: Date }) {
  const { currentLocale } = useI18nStore()

  const duration = intervalToDuration({ start: startDate, end: endDate });
  const formatted = formatDuration(duration, {
    locale: currentLocale,
    delimiter: ', ',
    format: ['years', 'months', 'days']
  });

  return <p>Tempo no mercado: {formatted}</p>;
}

export default function ExperienceCounter({
  startDate
}: ExperienceDisplayProps) {

  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(prev => prev + 1);
    }, 1000); // Atualiza a cada segundo para melhor performance

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-primary-foreground h-fit p-4`}> 
      <TimeIntervalText startDate={startDate} endDate={new Date()} />
    </div>
  );
}