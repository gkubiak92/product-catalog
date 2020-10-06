// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React, { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Queries } from '@testing-library/dom';
import { Action, AnyAction, Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import defaultStore from 'redux/store';

const Wrapper = ({ children }: { children?: ReactNode }) => {
  return <Router>{children}</Router>;
};

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options: RenderOptions<Q>
): RenderResult<Q>;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>
): RenderResult<Q> | RenderResult {
  return render<Q>(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

interface RenderWithRedux<S = any, A extends Action = AnyAction> {
  (ui: ReactNode, store?: Store<S, A>): RenderResult & {
    store: Store<S, A>;
  };
}

export const renderWithRedux: RenderWithRedux = (ui, store = defaultStore) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  // adding `store` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  store,
});
