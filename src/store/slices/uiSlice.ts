import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	mode: 'parents' | 'students'
	isModalOpen: boolean
	isModalSuccess: boolean
}

const initialState: IInitialState = {
	mode: 'parents',
	isModalOpen: false,
	isModalSuccess: false,
}

export const uiSlice = createSlice({
	name: 'uiSicee',
	initialState,
	reducers: {
		switchMode: (state, action: PayloadAction<'parents' | 'students'>) => {
			state.mode = action.payload
		},
		openModal: (state) => {
			state.isModalSuccess = false
			state.isModalOpen = true
		},
		closeModal: (state) => {
			state.isModalSuccess = false
			state.isModalOpen = false
		},
		setModalSuccess: (state) => {
			state.isModalSuccess = true
		},
	},
})

export default uiSlice.reducer
export const { switchMode, closeModal, openModal, setModalSuccess } =
	uiSlice.actions
