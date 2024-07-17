
import { useLanguage } from '../../hook/context/LanguageContext';
const AboutMe = () => {
	const { t } = useLanguage();
	return (
		<div>
			<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-SkilsText mb-6">
				{t("about_me")}
			</h2>
			<div className="space-y-4">
				<p className="text-lg font-normal text-navTextColor">
					{t("about_me_description_1")}
				</p>
				<p className="text-lg font-normal text-navTextColor">
					{t("about_me_description_2")}
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
