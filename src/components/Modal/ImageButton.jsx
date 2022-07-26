import { useDispatch } from 'react-redux'
import Button from '../Button'
import { openIcon } from '../../assets/icons'
import { randomBackground } from '../../components/Background/backgroundSlice'
import { newYoutubeId } from '../Control/youtubeEmbedSlice'

function ImageButton({ youtubeId, text, thumbnail }) {
	const dispatch = useDispatch()

	const link = `https://www.youtube.com/watch?v=${youtubeId}`

	const handleClick = () => {
		dispatch(newYoutubeId({ youtubeId, text }))
		dispatch(randomBackground())
	}

	return (
		<div
			className="position-relative col-xl-2 col-md-3 col-sm-4 col-6 p-3 cursor-pointer"
			role="button"
			onClick={handleClick}
		>
			<Button className="position-absolute top-0 end-0">
				<a href={link} target="_blank" rel="noreferrer">
					<img
						src={openIcon}
						alt="link"
						className="w-20 h-20 shadow mt-4 me-4"
					/>
				</a>
			</Button>

			<div
				style={{
					display: 'block',
					width: '100%',
					height: '0px',
					paddingBottom: '56%',
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					backgroundSize: 'cover',
					marginBottom: '4px',
					backgroundImage: `url(${thumbnail})`,
				}}
			></div>
			<div className="text-truncate green">{text}</div>
		</div>
	)
}
export default ImageButton
