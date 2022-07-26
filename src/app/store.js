import { configureStore } from '@reduxjs/toolkit'
import { showModalReducer } from '../components/Control'
import { backgroundReducer } from '../components/Background'
import { youtubeEmbedReducer } from '../components/Control'
import { pomodoroTimerReducer } from '../components/Heading'

export const store = configureStore({
	reducer: {
		showModal: showModalReducer,
		background: backgroundReducer,
		youtubeEmbed: youtubeEmbedReducer,
		pomodoroTimer: pomodoroTimerReducer,
	},
})
