/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const { t, i18n } = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	const changeLanguage = async (language) => {
		if (language !== currentLanguage) {
			await i18n.changeLanguage(language);
			setCurrentLanguage(language);
		}
	};

	return (
		<LanguageContext.Provider value={{ t, currentLanguage, changeLanguage, availableLanguages: ['en', 'tr'] }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};
