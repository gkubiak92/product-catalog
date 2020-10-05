import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'api/api.types';
import { UIState } from './ui.types';

const initialState: UIState = {
  productPreview: null,
  productPreviewOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setProductPreview(state, action: PayloadAction<Product>) {
      state.productPreview = action.payload;
    },
    toggleProductPreview(state, action: PayloadAction<boolean>) {
      state.productPreviewOpen = action.payload;
    },
  },
});

export const { setProductPreview, toggleProductPreview } = uiSlice.actions;

export default uiSlice.reducer;
