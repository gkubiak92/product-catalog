import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistedReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
