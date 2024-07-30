import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../features/darkModeSlice';
import { useLanguage } from '../../hook/context/LanguageContext';

const DarkModeToggle = () => {
	const { t } = useLanguage();

	const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(toggleDarkMode());
	};

	React.useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
		if (isDarkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDarkMode]);

	React.useEffect(() => {
		const storedDarkMode = localStorage.getItem('darkMode');
		if (storedDarkMode) {
			dispatch(toggleDarkMode(JSON.parse(storedDarkMode)));
		}
	}, [dispatch]);

	return (
		<label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
			<div className="relative">
				<input
					type="checkbox"
					id="dark-toggle"
					className="sr-only"
					checked={isDarkMode}
					onChange={handleToggle}
				/>
				<div className="block bg-darkModeBackground w-14 h-8 rounded-full"></div>
				{isDarkMode ? <div className={`dot absolute left-1 top-1 bg-transparent w-6 h-6 rounded-full transition transform ${isDarkMode ? 'translate-x-full' : ''}`}>
					{isDarkMode ? <FaMoon className="text-transparent	" /> : <FaSun className="text-yellow-500" />}
				</div> : <div className={`dot absolute left-1 top-1 bg-darkModeEllipse w-6 h-6 rounded-full transition transform ${isDarkMode ? 'translate-x-full' : ''}`}>
					{isDarkMode ? <FaMoon className="text-transparent	" /> : <FaSun className="text-yellow-500" />}
				</div>}

			</div>
			{isDarkMode ? <span className="ml-3 text-darkModeText font-bold text-[15px] leading-[1.134rem] tracking-[.25em]">
				{t("LIGHT_MODE")}
			</span> : <span className="ml-3 text-darkModeText font-bold text-[15px] leading-[1.134rem] tracking-[.25em]">{t("DARK_MODE")}</span>}

		</label>
	);
};

export default DarkModeToggle;
