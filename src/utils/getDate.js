export default () => {
	const today = new Date()

	const monthList = [
		'jan',
		'feb',
		'mar',
		'apr',
		'may',
		'jun',
		'jul',
		'aug',
		'sep',
		'oct',
		'nov',
		'dec',
	]

	const month = today.getMonth()

	const day = today.getDate()

	return `${monthList[month]} ${day < 10 ? '0' + day : day}`
}
