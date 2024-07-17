import LinkedIn from "../../../assets/ButtonIcon/brand/LinkedIn.png";
import GitHub from "../../../assets/ButtonIcon/brand/github.png";
import Line from "../../../assets/HeroImg/Line 11.png";
import { useLanguage } from '../../../hook/context/LanguageContext';
const HeroContent = () => {
	const { t } = useLanguage();
	return (
		<div className="flex flex-col items-center md:items-start p-4 md:p-8 lg:p-6">
			<div className="flex items-center space-x-4">
				<img src={Line} alt="Line" className="w-10 h-auto" />
				<p className="text-lg md:text-xl lg:text-2xl font-semibold text-SkilsText dark:text-gray-300">
					{t("almila_su")}
				</p>
			</div>
			<h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[4rem] lg:leading-[4.5rem] text-gray-900 dark:text-white text-center md:text-left">
				{t("creative_thinker")}
				<br />
				{t("minimalism_lover")}
			</h1>
			<p className="mt-6 text-base md:text-lg lg:text-xl text-navTextColor dark:text-gray-400 text-center md:text-left">
				{t("introduction")}
			</p>
			<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
				<button className="py-2 px-4 rounded-md bg-navText text-white hover:bg-blue-700">
					{t("hire_me_button")}
				</button>
				<button className="py-2 px-4 rounded-md border-2 border-navText text-navText hover:bg-navText hover:text-white flex items-center space-x-2">
					<img src={GitHub} alt="GitHub" className="w-5 h-5" />
					<span>{t("github")}</span>
				</button>
				<button className="py-2 px-4 rounded-md border-2 border-navText text-navText hover:bg-navText hover:text-white flex items-center space-x-2">
					<img src={LinkedIn} alt="LinkedIn" className="w-5 h-5" />
					<span>{t("linkedin")}</span>
				</button>
			</div>
		</div>
	);
};

export default HeroContent;
