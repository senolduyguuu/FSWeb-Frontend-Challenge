import HeroContent from "../../component/HeroLeft/HeroContent/HeroContent";
import HeroRight from "../../component/HeroLeft/HeroRight/HeroRight";

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly mt-10 md:mt-20">
			<HeroContent />
			<HeroRight />
		</div>
	);
};

export default Hero;
