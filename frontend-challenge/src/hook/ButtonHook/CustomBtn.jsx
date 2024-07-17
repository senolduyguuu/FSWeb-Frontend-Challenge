/* eslint-disable react/prop-types */
// CustomButton.js

const CustomButton = ({ children }) => {
	return (
		<button className="w-[131px] h-[52px] px-8 py-3 gap-2.5 bg-red-500">
			{children}
		</button>
	);
}

export default CustomButton;
