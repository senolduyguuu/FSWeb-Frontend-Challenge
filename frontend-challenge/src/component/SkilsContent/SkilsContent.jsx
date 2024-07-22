import { useLanguage } from '../../hook/context/LanguageContext';

const SkilsContent = () => {
	const { t } = useLanguage();

	return (
		<div className="mt-12">
			<div className="mb-6 text-center md:text-left">
				<p className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-10 text-ProfileColor">
					{t("skills")}
				</p>
			</div>

			<div className="flex flex-col md:flex-row justify-between flex-wrap border-b-2 border-gray-300 dark:border-gray-600 pb-4">
				<div className="max-w-xs mb-6 md:mb-0 flex-shrink-0">
					<h2 className="text-2xl lg-text[1.875rem] lg-text[1.875rem] text-SkilsText font-medium mb-2 leading-7">
						{t("javascript")}
					</h2>
					<p className="text-navTextColor text-xs	 font-normal leading-4">
						{t("javascript_description")}
					</p>
				</div>
				<div className="max-w-xs mb-6 md:mb-0 flex-shrink-0">
					<h2 className="text-2xl lg-text[1.875rem] lg-text[1.875rem] text-SkilsText font-medium mb-2 leading-7">
						{t("react_js")}
					</h2>
					<p className="text-navTextColor text-xs font-normal leading-4">
						{t("react_js_description")}
					</p>
				</div>
				<div className="max-w-xs mb-6 md:mb-0 flex-shrink-0">
					<h2 className="text-2xl lg-text[1.875rem] lg-text[1.875rem] text-SkilsText font-medium mb-2 leading-7">
						{t("node_js")}
					</h2>
					<p className="text-navTextColor text-xs	font-normal leading-4">
						{t("node_js_description")}
					</p>
				</div>
			</div>
		</div>
	);
}

export default SkilsContent;
