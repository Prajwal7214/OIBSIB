import { useState } from 'react';
import { ArrowRightLeft, RefreshCw, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { TemperatureInput } from './TemperatureInput';
import { UnitSelector } from './UnitSelector';
import { ResultDisplay } from './ResultDisplay';
import { ConversionHistory } from './ConversionHistory';
import { useTheme } from '@/hooks/useTheme';
import { useConversionHistory } from '@/hooks/useConversionHistory';
import {
  TemperatureUnit,
  convertTemperature,
  isValidKelvin,
  getAbsoluteZero,
  UNIT_SYMBOLS,
} from '@/lib/temperatureUtils';

export function TemperatureConverter() {
  const { theme, toggleTheme } = useTheme();
  const { history, addRecord, clearHistory, removeRecord } = useConversionHistory();
  
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>('celsius');
  const [toUnit, setToUnit] = useState<TemperatureUnit>('fahrenheit');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | undefined>();

  const handleConvert = () => {
    // Clear previous error
    setError(undefined);

    // Validate input
    if (!inputValue.trim()) {
      setError('Please enter a temperature value');
      setResult(null);
      return;
    }

    const numValue = parseFloat(inputValue);
    
    if (isNaN(numValue)) {
      setError('Please enter a valid number');
      setResult(null);
      return;
    }

    // Check for temperatures below absolute zero
    if (!isValidKelvin(numValue, fromUnit)) {
      const absZero = getAbsoluteZero(fromUnit);
      setError(`Temperature cannot be below ${absZero.toFixed(2)}${UNIT_SYMBOLS[fromUnit]} (absolute zero)`);
      setResult(null);
      return;
    }

    // Perform conversion
    const convertedValue = convertTemperature(numValue, fromUnit, toUnit);
    setResult(convertedValue);

    // Add to history
    addRecord({
      fromValue: numValue,
      fromUnit,
      toValue: convertedValue,
      toUnit,
    });
  };

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult(null);
    setError(undefined);
  };

  const handleReset = () => {
    setInputValue('');
    setResult(null);
    setError(undefined);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConvert();
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 px-4 py-8 md:py-12">
      <div className="mx-auto max-w-md">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-xl bg-primary/10 p-3">
              <Thermometer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                Temperature Converter
              </h1>
              <p className="text-sm text-muted-foreground">
                Convert between Celsius, Fahrenheit, and Kelvin
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-6" onKeyDown={handleKeyDown}>
            <TemperatureInput
              value={inputValue}
              onChange={setInputValue}
              unit={fromUnit}
              error={error}
            />

            {/* Unit Selectors with Swap Button */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
              <UnitSelector
                value={fromUnit}
                onChange={setFromUnit}
                label="From"
                id="from-unit"
              />
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSwapUnits}
                className="rounded-full mb-0.5 hover:bg-accent transition-all duration-200 hover:rotate-180"
                aria-label="Swap units"
              >
                <ArrowRightLeft className="h-4 w-4" />
              </Button>
              
              <UnitSelector
                value={toUnit}
                onChange={setToUnit}
                label="To"
                id="to-unit"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleConvert}
                className="flex-1 h-12 text-base font-medium"
                size="lg"
              >
                Convert
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="h-12"
                aria-label="Reset"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            {/* Result Display */}
            <ResultDisplay result={result} unit={toUnit} />
          </div>
        </div>

        {/* Conversion History */}
        <ConversionHistory
          history={history}
          onClear={clearHistory}
          onRemove={removeRecord}
        />
      </div>
    </div>
  );
}
