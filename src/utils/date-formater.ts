import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatMonthYear(date: Date, locale = ptBR): string {
  return format(date, "MMMM/yyyy", { locale });
}