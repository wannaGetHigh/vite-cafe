import { audio } from '../constants'

export const randomId = () => {
	const newIndex = Math.floor(Math.random() * audio.length)
	const { youtubeId, text } = audio[newIndex]

	return { youtubeId, text, newIndex }
}

export const nextId = (index) => {
	let newIndex
	if (index >= audio.length - 1) {
		newIndex = 0
	} else {
		newIndex = index + 1
	}
	const { youtubeId, text } = audio[newIndex]

	return { youtubeId, text, newIndex }
}

export const prevId = (index) => {
	let newIndex

	if (index <= 0) {
		newIndex = audio.length - 1
	} else {
		newIndex = index - 1
	}

	const { youtubeId, text } = audio[newIndex]

	return { youtubeId, text, newIndex }
}
