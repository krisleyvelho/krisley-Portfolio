import { format, formatDuration, intervalToDuration } from "date-fns";
import { ptBR, type Locale } from "date-fns/locale";

export function formatMonthYear(date: Date, locale = ptBR): string {
  return format(date, "MMMM/yyyy", { locale });
}

export function getTimeIntervalText(startDate: Date, endDate: Date, locale: Locale = ptBR): string {
 const duration = intervalToDuration({ start: startDate, end: endDate });
   const formatted = formatDuration(duration, {
     locale,
     delimiter: ', ',
     format: ['years', 'months', 'days']
   });

   return formatted
}