import { ChevronDown, ChevronUp, History, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConversionRecord } from '@/hooks/useConversionHistory';
import { UNIT_SYMBOLS, TemperatureUnit, formatTemperature } from '@/lib/temperatureUtils';

interface ConversionHistoryProps {
  history: ConversionRecord[];
  onClear: () => void;
  onRemove: (id: string) => void;
}

export function ConversionHistory({ history, onClear, onRemove }: ConversionHistoryProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          aria-expanded={isExpanded}
        >
          <History className="h-4 w-4" />
          <span>Conversion History ({history.length})</span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>

      {isExpanded && (
        <ul className="mt-4 space-y-2" role="list" aria-label="Conversion history">
          {history.map((record) => (
            <li
              key={record.id}
              className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2 text-sm group"
            >
              <span className="text-foreground">
                <span className="font-medium">
                  {formatTemperature(record.fromValue)}
                  {UNIT_SYMBOLS[record.fromUnit as TemperatureUnit]}
                </span>
                <span className="mx-2 text-muted-foreground">→</span>
                <span className="font-medium">
                  {formatTemperature(record.toValue)}
                  {UNIT_SYMBOLS[record.toUnit as TemperatureUnit]}
                </span>
              </span>
              <button
                onClick={() => onRemove(record.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                aria-label="Remove this conversion"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
