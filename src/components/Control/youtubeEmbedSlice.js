import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	title:
		'4K 🔴 Lofi Hip Hop Beats 24/7 Radio 🔴 No Copyright Lofi Beats to sleep/ study to',
	id: 'ORBwkXsUNEs',
	currentIndex: 1,
	isYoutubePlayed: false,
}

export const youtubeEmbedSlice = createSlice({
	name: 'youtubeEmbed',
	initialState,
	reducers: {
		newYoutubeId: (state, action) => {
			state.id = action.payload.youtubeId
			state.title = action.payload.text
			state.currentIndex = action.payload.newIndex
		},
		playYoutube: (state, action) => {
			state.isYoutubePlayed = action.payload
		},
	},
})

export const { newYoutubeId, playYoutube } = youtubeEmbedSlice.actions
export default youtubeEmbedSlice.reducer
