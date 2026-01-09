export type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin';

export const UNIT_SYMBOLS: Record<TemperatureUnit, string> = {
  celsius: '°C',
  fahrenheit: '°F',
  kelvin: 'K',
};

export const UNIT_LABELS: Record<TemperatureUnit, string> = {
  celsius: 'Celsius',
  fahrenheit: 'Fahrenheit',
  kelvin: 'Kelvin',
};

// Convert any unit to Celsius first (base unit)
function toCelsius(value: number, from: TemperatureUnit): number {
  switch (from) {
    case 'celsius':
      return value;
    case 'fahrenheit':
      return (value - 32) * (5 / 9);
    case 'kelvin':
      return value - 273.15;
  }
}

// Convert from Celsius to target unit
function fromCelsius(celsius: number, to: TemperatureUnit): number {
  switch (to) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return celsius * (9 / 5) + 32;
    case 'kelvin':
      return celsius + 273.15;
  }
}

export function convertTemperature(
  value: number,
  from: TemperatureUnit,
  to: TemperatureUnit
): number {
  if (from === to) return value;
  
  const celsius = toCelsius(value, from);
  return fromCelsius(celsius, to);
}

export function formatTemperature(value: number, decimals: number = 2): string {
  return value.toFixed(decimals);
}

export function isValidKelvin(value: number, unit: TemperatureUnit): boolean {
  // Check if the temperature would result in negative Kelvin
  const kelvin = unit === 'kelvin' ? value : convertTemperature(value, unit, 'kelvin');
  return kelvin >= 0;
}

export function getAbsoluteZero(unit: TemperatureUnit): number {
  switch (unit) {
    case 'celsius':
      return -273.15;
    case 'fahrenheit':
      return -459.67;
    case 'kelvin':
      return 0;
  }
}
