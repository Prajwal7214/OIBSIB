import { Input } from '@/components/ui/input';
import { UNIT_SYMBOLS, TemperatureUnit } from '@/lib/temperatureUtils';

interface TemperatureInputProps {
  value: string;
  onChange: (value: string) => void;
  unit: TemperatureUnit;
  error?: string;
}

export function TemperatureInput({ value, onChange, unit, error }: TemperatureInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow empty, negative sign, decimal point, and numbers
    if (newValue === '' || newValue === '-' || /^-?\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor="temperature-input" className="text-sm font-medium text-muted-foreground">
        Temperature
      </label>
      <div className="relative">
        <Input
          id="temperature-input"
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          placeholder="Enter temperature"
          className={`pr-12 text-lg ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
          aria-describedby={error ? 'temperature-error' : undefined}
          aria-invalid={!!error}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
          {UNIT_SYMBOLS[unit]}
        </span>
      </div>
      {error && (
        <p id="temperature-error" className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
