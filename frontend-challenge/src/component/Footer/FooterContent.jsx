import "../.../../../App.css";
import FooterImg from "../../assets/Footer/👉.png";
import { useLanguage } from '../../hook/context/LanguageContext';

const FooterContent = () => {
	const { t } = useLanguage();

	return (
		<footer className="footer-dark-class h-[25.563rem] flex items-center p-11 bg-FooterColor mt-4">
			<div className="container mx-auto px-4 lg:max-w-5xl xl:max-w-6xl mt-8">
				<h1 className="text-3xl md:text-4xl lg:text-[2.625rem]font-bold mb-6 text-HeaderColor">
					{t("footer_title")}
				</h1>
				<div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
					<div className="flex items-center space-x-4">
						<img src={FooterImg} alt="Footer Icon" />
						<a className="text-lg md:text-xl text-[#AF0C48] underline underline-offset-1" href="#">almilasucode@gmail.com</a>
					</div>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
						<a
							href="#"
							className="text-lg md:text-xl text-[#0A0A14] font-medium	"
						>
							{t("personal_blog")}
						</a>
						<a
							href="#"
							className="text-lg md:text-xl font-medium	text-[#00AB6B]"
						>
							{t("github")}
						</a>
						<a
							href="#"
							className="text-lg md:text-xl font-medium	text-[#0077B5]"
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
