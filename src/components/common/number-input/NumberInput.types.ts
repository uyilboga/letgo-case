import React from 'react';

export interface NumberInputTypes {
  name?: string;
  value: number;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
