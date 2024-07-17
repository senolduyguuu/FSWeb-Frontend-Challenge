/* eslint-disable react/prop-types */


const Button = ({ children }) => {
	return (
		<button

			className="py-2 px-4 mt-6 rounded-md bg-navText"
		>
			{children}
		</button>
	);
};

export default Button;