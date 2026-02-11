
import React from 'react';

export interface SlideData {
  id: string;
  title: string;
  index: number;
}

export interface MetricData {
  label: string;
  value: string | number;
  // Fix: Added React import to resolve React.ReactNode namespace error
  icon: React.ReactNode;
  color?: string;
}