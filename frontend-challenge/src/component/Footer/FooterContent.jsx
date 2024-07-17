import FooterImg from "../../assets/Footer/👉.png";
import { useLanguage } from '../../hook/context/LanguageContext';

const FooterContent = () => {
	const { t } = useLanguage();

	return (
		<footer className="bg-FooterColor py-12">
			<div className="container mx-auto px-4 md:px-8 lg:px-12 text-center md:text-left">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
					{t("footer_title")}
				</h1>
				<div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
					<div className="flex items-center space-x-4">
						<img src={FooterImg} alt="Footer Icon" className="w-10 h-10" />
						<p className="text-lg md:text-xl">almilasucode@gmail.com</p>
					</div>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
						<a
							href="#"
							className="text-lg md:text-xl hover:text-blue-400 transition-colors duration-300"
						>
							{t("personal_blog")}
						</a>
						<a
							href="#"
							className="text-lg md:text-xl hover:text-blue-400 transition-colors duration-300"
						>
							{t("github")}
						</a>
						<a
							href="#"
							className="text-lg md:text-xl hover:text-blue-400 transition-colors duration-300"
						>
							{t("linkedin")}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterContent;
