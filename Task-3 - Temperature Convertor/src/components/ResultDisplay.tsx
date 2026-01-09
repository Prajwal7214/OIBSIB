import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UNIT_SYMBOLS, TemperatureUnit, formatTemperature } from '@/lib/temperatureUtils';
import { toast } from '@/hooks/use-toast';

interface ResultDisplayProps {
  result: number | null;
  unit: TemperatureUnit;
}

export function ResultDisplay({ result, unit }: ResultDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (result === null) return;
    
    const textToCopy = `${formatTemperature(result)}${UNIT_SYMBOLS[unit]}`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast({
        title: 'Copied!',
        description: `${textToCopy} copied to clipboard`,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: 'Failed to copy',
        description: 'Could not copy to clipboard',
        variant: 'destructive',
      });
    }
  };

  if (result === null) {
    return (
      <div className="rounded-lg bg-muted/50 p-6 text-center">
        <p className="text-muted-foreground">Enter a temperature and click Convert</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-muted/50 p-6 text-center space-y-2">
      <p className="text-sm text-muted-foreground">Result</p>
      <div className="flex items-center justify-center gap-3">
        <p className="text-4xl font-bold text-foreground">
          {formatTemperature(result)}
          <span className="text-2xl ml-1">{UNIT_SYMBOLS[unit]}</span>
        </p>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="rounded-full transition-all duration-200 hover:bg-accent"
          aria-label="Copy result to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
