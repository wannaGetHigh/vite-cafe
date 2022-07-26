import { createSlice } from '@reduxjs/toolkit'
import backgrounds from '../../constants/backgrounds'

const initialState = {
	index: 0,
	backgrounds,
	background: backgrounds[0],
	isLoading: false,
}

export const backgroundSlice = createSlice({
	name: 'background',
	initialState,
	reducers: {
		newBackground: (state) => {
			if (state.index >= backgrounds.length - 1) {
				state.index = 0
			}
			state.index += 1
			state.background = state.backgrounds.at(state.index)
		},

		previousBackground: (state) => {
			if (state.index <= 0) {
				state.index = backgrounds.length
			}
			state.index -= 1
			state.background = state.backgrounds.at(state.index)
		},

		randomBackground: (state) => {
			const index = Math.floor(Math.random() * state.backgrounds.length)
			state.background = state.backgrounds[index]
		},

		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
	},
})

export const {
	newBackground,
	previousBackground,
	randomBackground,
	setLoading,
} = backgroundSlice.actions
export default backgroundSlice.reducer
