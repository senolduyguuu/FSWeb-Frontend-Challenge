/* eslint-disable react/no-unescaped-entities */

import { useLanguage } from '../../hook/context/LanguageContext';

const LanguageSwitcher = () => {
	// eslint-disable-next-line no-unused-vars
	const { t, changeLanguage, currentLanguage } = useLanguage();

	return (
		<>
			<span className="mx-4 text-darkModeText dark:text-white font-bold">|</span>
			{currentLanguage === 'tr' ? (
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						changeLanguage('en');  // İngilizceye geçiş
					}}
					className="text-darkModeBackground font-bold text-[15px] leading-[1.134rem] tracking-[.25em]"
				>
					İNGİLİZCE <span className="text-darkModeText">'YE GEÇ</span>
				</a>
			) : (
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						changeLanguage('tr');  // Türkçeye geçiş
					}}
					className="text-darkModeBackground font-bold text-[15px] leading-[1.134rem] tracking-[.25em]"
				>
					TÜRKÇE <span className="text-darkModeText">'YE GEÇ</span>
				</a>
			)}
			{/* <p>{t('welcome_message')}</p> */}
		</>
	);
};

export default LanguageSwitcher;
