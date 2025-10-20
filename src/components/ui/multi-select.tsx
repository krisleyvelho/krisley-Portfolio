import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Funnel } from "lucide-react";

interface MultiSelectProps<T> {
  selectItems?: string[]
  options: string[];
  onSelect: (option: T) => void;
}

export function MultiSelect<T extends string>({options, onSelect, selectItems = []}: MultiSelectProps<T>) {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {selectItems.length > 0
            ? `${selectItems.length} selecionada(s)`
            : "Filtrar por Tecnologia"}
          <Funnel className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="space-y-2">
          {options.map((opt) => (
            <div key={opt} className="flex items-center space-x-2">
              <Checkbox
                id={opt}
                checked={selectItems.includes(opt)}
                onCheckedChange={() => onSelect(opt as T)}
              />
              <label
                htmlFor={opt}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {opt}
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}