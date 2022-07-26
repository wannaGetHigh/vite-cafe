function Button({ children, className, onClick }) {
	return (
		<button className={`btn border-0 p-0 m-0 ${className}`} onClick={onClick}>
			{children}
		</button>
	)
}
export default Button
