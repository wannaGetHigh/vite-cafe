import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	pomodoroCustom: 1500,
	pomodoroTime: 1500,
}

export const pomodoroTimerSlice = createSlice({
	name: 'pomodoroTimer',
	initialState,
	reducers: {
		pomodoroPlay: (state) => {
			state.pomodoroTime -= 1
		},
		addFiveMin: (state) => {
			state.pomodoroCustom += 300
			state.pomodoroTime = state.pomodoroCustom
		},
		resetPomodoroTime: (state) => {
			state.pomodoroTime = 1500
		},
		pomodoroEnd: (state) => {
			state.pomodoroTime = state.pomodoroCustom
		},
	},
})

export const {
	pomodoroPlay,
	addFiveMin,
	resetPomodoroTime,
	setPomodoroInterval,
	pomodoroEnd,
} = pomodoroTimerSlice.actions
export default pomodoroTimerSlice.reducer
