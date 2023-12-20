import { IStock } from '@/utils/types/symbols.types';
export const getLocalStorage = (key: string) => {
  return typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(key) || '[]') : [];
};
export const setLocalStorage = (key: string, value: IStock[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
