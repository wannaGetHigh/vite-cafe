import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false,
}

export const showModalSlice = createSlice({
	name: 'showModal',
	initialState,
	reducers: {
		showModal: (state) => {
			state.value = true
		},
		hideModal: (state) => {
			state.value = false
		},
	},
})

export const { showModal, hideModal } = showModalSlice.actions
export default showModalSlice.reducer
