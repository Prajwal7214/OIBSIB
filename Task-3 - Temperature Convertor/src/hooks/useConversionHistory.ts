import { useState, useEffect } from 'react';

export interface ConversionRecord {
  id: string;
  fromValue: number;
  fromUnit: string;
  toValue: number;
  toUnit: string;
  timestamp: number;
}

const MAX_HISTORY_ITEMS = 10;
const STORAGE_KEY = 'conversion-history';

export function useConversionHistory() {
  const [history, setHistory] = useState<ConversionRecord[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addRecord = (record: Omit<ConversionRecord, 'id' | 'timestamp'>) => {
    const newRecord: ConversionRecord = {
      ...record,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    setHistory(prev => {
      const updated = [newRecord, ...prev].slice(0, MAX_HISTORY_ITEMS);
      return updated;
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const removeRecord = (id: string) => {
    setHistory(prev => prev.filter(record => record.id !== id));
  };

  return { history, addRecord, clearHistory, removeRecord };
}
