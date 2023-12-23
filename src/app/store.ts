import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { PokemonSlice } from './slices/PokemonSlice';

export const store = configureStore({
  reducer: {
     pokemon: PokemonSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
