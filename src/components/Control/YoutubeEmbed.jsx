import ReactPlayer from 'react-player/youtube'
import { useSelector } from 'react-redux'
import { youtubeEmbedSelector } from '../../app/selector'

function YoutubeEmbed() {
	const { id, isYoutubePlayed } = useSelector(youtubeEmbedSelector)
	const url = `https://www.youtube.com/watch?v=${id}`

	return (
		<ReactPlayer
			url={url}
			loop
			width="0"
			height="0"
			playing={isYoutubePlayed}
		/>
	)
}
export default YoutubeEmbed
