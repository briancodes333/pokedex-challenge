import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { PokemonSlice } from './slices/PokemonSlice'
import { HistorySlice } from './slices/HistorySlice'

export const store = configureStore({
  reducer: {
    pokemon: PokemonSlice.reducer,
    history: HistorySlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
