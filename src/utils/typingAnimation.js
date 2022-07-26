export default (text, speed = 400) => {
	const words = text.split('')
	const length = words.length
	let index = 0
	let word = ''

	const typingText = () => {
		const timerId = setInterval(() => {
			if (index === length) {
				clearInterval(timerId)
			} else {
				console.log('interval', word, length)
				word += words[index]
				index++
				return word
			}
		}, speed)
	}
	return typingText
}
