/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { useLanguage } from '../../hook/context/LanguageContext';

const LanguageSwitcher = () => {
	const { t, changeLanguage, currentLanguage } = useLanguage();

	const handleLanguageChange = (language) => {
		changeLanguage(language);
		localStorage.setItem('currentLanguage', language);
	};

	React.useEffect(() => {
		const storedLanguage = localStorage.getItem('currentLanguage');
		if (storedLanguage) {
			changeLanguage(storedLanguage);
		}
	}, [changeLanguage]);

	return (
		<>
			<span className="mx-4 text-darkModeText dark:text-white font-bold">|</span>
			{currentLanguage === 'tr' ? (
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						handleLanguageChange('en');
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
						handleLanguageChange('tr');
					}}
					className="text-darkModeBackground font-bold text-[15px] leading-[1.134rem] tracking-[.25em]"
				>
					TÜRKÇE <span className="text-darkModeText">'YE GEÇ</span>
				</a>
			)}
		</>
	);
};

export default LanguageSwitcher;
