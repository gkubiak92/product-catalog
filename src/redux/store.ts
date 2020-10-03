import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistedReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
