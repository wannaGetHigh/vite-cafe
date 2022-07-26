import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playIcon, pauseIcon } from '../assets/icons'
import Button from './Button'
import { youtubeEmbedSelector } from '../app/selector'
import { playYoutube } from './Control/youtubeEmbedSlice'

function YoutubePlay() {
	const { isYoutubePlayed } = useSelector(youtubeEmbedSelector)
	const dispatch = useDispatch()
	const [isHover, setIsHover] = useState(false)

	const handlePlay = () => {
		dispatch(playYoutube(true))
	}

	const handlePause = () => {
		dispatch(playYoutube(false))
	}

	return (
		<div
			className="position-absolute top-50 start-50 translate-middle w-50 h-50 d-flex justify-content-center align-items-center fadeIn"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{isHover && isYoutubePlayed && (
				<Button onClick={handlePause} className="w-50 h-50">
					<img src={pauseIcon} alt="fullscreen" className="w-20 h-20 shadow" />
				</Button>
			)}
			{isHover && !isYoutubePlayed && (
				<Button onClick={handlePlay} className="w-50 h-50">
					<img src={playIcon} alt="fullscreen" className="w-20 h-20 shadow" />
				</Button>
			)}
		</div>
	)
}
export default YoutubePlay
