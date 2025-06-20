import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	mode: 'parents' | 'students'
}

const initialState: IInitialState = {
	mode: 'parents',
}

export const uiSlice = createSlice({
	name: 'uiSicee',
	initialState,
	reducers: {
		switchMode: (state, action: PayloadAction<'parents' | 'students'>) => {
			state.mode = action.payload
		},
	},
})

export default uiSlice.reducer
export const { switchMode } = uiSlice.actions
