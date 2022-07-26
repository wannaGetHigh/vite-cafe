import { useState, useEffect } from 'react'

function TypingAnimation({ text, speed = 400, show = false }) {
	const [typingText, setTypingText] = useState('')
	const words = text.split('')
	const length = words.length
	let index = 0
	let word = ''

	useEffect(() => {
		const timerId = setInterval(() => {
			if (index === length) {
				clearInterval(timerId)
			} else {
				word += words[index]
				setTypingText(word)
				index++
			}
		}, speed)
	}, [])

	return (
		<span className="text-white fs-5 green">
			{typingText}
			{show && <span className="ms-1 blink">█</span>}
		</span>
	)
}
export default TypingAnimation
