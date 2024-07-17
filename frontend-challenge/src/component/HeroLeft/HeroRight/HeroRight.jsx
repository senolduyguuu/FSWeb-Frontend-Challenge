import HeroImg from "../../../assets/HeroImg/image 1.png";

const HeroRight = () => {
	return (
		<div className="flex items-center justify-center w-full h-auto md:w-[50%] md:h-auto">
			<img src={HeroImg} alt="Hero" className="w-full h-auto max-w-[500px]" />
		</div>
	);
};

export default HeroRight;
