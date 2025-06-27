import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
	mode: 'parents' | 'students'
	isModalOpen: boolean
	isModalSuccess: boolean
	isSidebarOpen: boolean
	isIntroAnimationComplete: boolean
	isCanAddSection: boolean
}

const initialState: IInitialState = {
	mode: 'students',
	isModalOpen: false,
	isModalSuccess: false,
	isSidebarOpen: false,
	isIntroAnimationComplete: false,
	isCanAddSection: false,
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
			state.isSidebarOpen = false
			state.isModalOpen = true
		},
		closeModal: (state) => {
			state.isModalSuccess = false
			state.isModalOpen = false
		},
		setModalSuccess: (state) => {
			state.isModalSuccess = true
		},
		openSidebar: (state) => {
			state.isSidebarOpen = true
		},
		closeSidebar: (state) => {
			state.isSidebarOpen = false
		},
		toggleIsIntroAnimationComplete: (state) => {
			state.isIntroAnimationComplete = !state.isIntroAnimationComplete
		},
		setIsCanAddSection: (state, action: PayloadAction<boolean>) => {
			state.isCanAddSection = action.payload
		},
	},
})

export default uiSlice.reducer
export const {
	switchMode,
	closeModal,
	openModal,
	setModalSuccess,
	closeSidebar,
	openSidebar,
	toggleIsIntroAnimationComplete,
	setIsCanAddSection,
} = uiSlice.actions
