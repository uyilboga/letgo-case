import React from 'react';

export interface CustomModalTypes {
  show: boolean;
  onHide: () => void;
  onShow?: () => void;
  title: string;
  children: React.ReactNode;
  scrollable?: boolean;
  size?: 'sm' | 'lg' | 'xl';
  centered?: boolean;
}
