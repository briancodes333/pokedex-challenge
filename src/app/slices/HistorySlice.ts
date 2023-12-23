import { createSlice } from '@reduxjs/toolkit'
import { HistoryInitialState } from '../../utils/Types'

const initialState: HistoryInitialState = {
  recentlySearched: undefined,
}

export const HistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToRecentlySearched: (state, action) => {
      if (action.payload) {
        console.log(action.payload)
        const historyObj = {
          name: action.payload.name,
          id: action.payload.id,
          image: action.payload.image,
        }
        if (state.recentlySearched) {
          const alreadySearched = state.recentlySearched.find(
            (pokemon) => pokemon.id === historyObj.id,
          )
          if (!alreadySearched) {
            // if the pokemon is not in the history, add it.
            const newRecentlySearched = [...state.recentlySearched, historyObj]
            state.recentlySearched = newRecentlySearched
          } else {
            // if the pokemon is in the history, move it to the top.
            const foundIndex = state.recentlySearched.findIndex(
              (pokemon) => pokemon.id === historyObj.id,
            )
            state.recentlySearched.splice(foundIndex, 1)
            state.recentlySearched.unshift(alreadySearched)
          }
        } else {
          state.recentlySearched = [historyObj]
        }
      }
    },
  },
})

export const { addToRecentlySearched } = HistorySlice.actions

export default HistorySlice.reducer
