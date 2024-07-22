const buttons = ["react", "redux", "axios"];

const ProjectBtn = () => {
	return (
		<div className="flex space-x-4 justify-start">
			{buttons.map((button, index) => (
				<button
					key={index}
					className="border border-blue-700 text-blue-700 rounded px-4 py-2"
				>
					{button}
				</button>
			))}
		</div>
	);
}

export default ProjectBtn;
