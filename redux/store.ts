import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import applicationReducer from './reducers/applicationSlice';

export const store = configureStore({
  reducer: {
    application: applicationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
