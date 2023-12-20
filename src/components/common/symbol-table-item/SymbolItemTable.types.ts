import { ISymbol } from '@/utils/types/symbols.types';

export interface SymbolItemTableTypes {
  data: ISymbol;
  type: 'symbol' | 'stock';
  stockQuantity?: number;
}
