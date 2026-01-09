import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TemperatureUnit, UNIT_LABELS, UNIT_SYMBOLS } from '@/lib/temperatureUtils';

interface UnitSelectorProps {
  value: TemperatureUnit;
  onChange: (value: TemperatureUnit) => void;
  label: string;
  id: string;
}

const units: TemperatureUnit[] = ['celsius', 'fahrenheit', 'kelvin'];

export function UnitSelector({ value, onChange, label, id }: UnitSelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <Select value={value} onValueChange={(v) => onChange(v as TemperatureUnit)}>
        <SelectTrigger id={id} className="w-full bg-background">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-popover">
          {units.map((unit) => (
            <SelectItem key={unit} value={unit}>
              {UNIT_LABELS[unit]} ({UNIT_SYMBOLS[unit]})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
