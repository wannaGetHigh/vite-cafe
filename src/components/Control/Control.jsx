import { useDispatch, useSelector } from 'react-redux'
import {
	crossArrowIcon,
	nextIcon,
	playIcon,
	previousIcon,
	pauseIcon,
	dotsIcon,
	timerIcon,
} from '../../assets/icons'
import Button from '../Button'
import YoutubeEmbed from './YoutubeEmbed'
import { showModal } from './showModalSlice'
import {
	newBackground,
	previousBackground,
} from '../Background/backgroundSlice'
import { youtubeEmbedSelector, pomodoroTimerSelector } from '../../app/selector'
import { randomId, nextId, prevId, convertTime } from '../../utils'
import { newYoutubeId, playYoutube } from './youtubeEmbedSlice'
import { setLoading } from '../Background/backgroundSlice'
import Beats from './Beats'

function Control() {
	const { title, currentIndex, isYoutubePlayed } =
		useSelector(youtubeEmbedSelector)
	const { pomodoroTime } = useSelector(pomodoroTimerSelector)

	const dispatch = useDispatch()

	const handleNextSong = () => {
		const { youtubeId, text, newIndex } = nextId(currentIndex)

		dispatch(setLoading(true))
		dispatch(newBackground())
		dispatch(newYoutubeId({ youtubeId, text, newIndex }))
		dispatch(playYoutube(true))
	}

	const handlePrevSong = () => {
		const { youtubeId, text, newIndex } = prevId(currentIndex)

		dispatch(setLoading(true))
		dispatch(previousBackground())
		dispatch(newYoutubeId({ youtubeId, text, newIndex }))
		dispatch(playYoutube(true))
	}

	const handleRandomSong = () => {
		const { youtubeId, text, newIndex } = randomId()

		dispatch(setLoading(true))
		dispatch(newBackground())
		dispatch(newYoutubeId({ youtubeId, text, newIndex }))
		dispatch(playYoutube(true))
	}

	const handlePlay = () => {
		dispatch(playYoutube(true))
	}

	const handlePause = () => {
		dispatch(playYoutube(false))
	}

	return (
		<div className="fadeIn">
			<div className="d-flex justify-content-start align-items-center gap-3">
				{isYoutubePlayed ? (
					<Button onClick={handlePause}>
						<img
							src={pauseIcon}
							alt="fullscreen"
							className="w-20 h-20 shadow"
						/>
					</Button>
				) : (
					<Button onClick={handlePlay}>
						<img src={playIcon} alt="fullscreen" className="w-20 h-20 shadow" />
					</Button>
				)}
				<Button onClick={handleRandomSong}>
					<img
						src={crossArrowIcon}
						alt="random song"
						className="w-20 h-20 shadow"
					/>
				</Button>
				<Button onClick={handlePrevSong}>
					<img
						src={previousIcon}
						alt="previous song"
						className="w-20 h-20 shadow"
					/>
				</Button>
				<Button onClick={handleNextSong}>
					<img src={nextIcon} alt="next song" className="w-20 h-20 shadow" />
				</Button>
			</div>

			<div className="d-flex justify-content-between">
				<div
					className="d-flex justify-content-start align-items-center gap-3"
					onClick={() => dispatch(showModal())}
				>
					{isYoutubePlayed ? (
						<Beats />
					) : (
						<img src={dotsIcon} alt="stop" className="w-20 h-20 shadow" />
					)}

					<div role="button" className="fs-5 text-white shadow cursor-pointer">
						{title}
					</div>
				</div>

				<div className="fs-5 text-white shadow user-select-none">
					<img src={timerIcon} className="w-20 w-20 me-2" />
					{convertTime(pomodoroTime)}
				</div>
			</div>

			<YoutubeEmbed />
		</div>
	)
}
export default Control
