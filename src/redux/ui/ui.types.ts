import { Product } from 'api/api.types';

export interface UIState {
  productPreview: Product | null;
  productPreviewOpen: boolean;
}
