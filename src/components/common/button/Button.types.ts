import React from 'react';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'link' | 'danger' | 'success' | 'warning';
  children: React.ReactNode;
  onClick: () => void;
};
