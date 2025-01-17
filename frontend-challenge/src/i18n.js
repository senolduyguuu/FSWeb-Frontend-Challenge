
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import tr from './locales/tr/translation.json';

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			tr: { translation: tr },
		},
		lng: 'tr', // Varsayılan dil
		fallbackLng: 'ts', // Hangi dil yoksa varsayılan olarak bu dili kullanır
	});


export default i18n;
