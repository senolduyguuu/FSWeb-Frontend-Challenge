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
		if (isDarkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDarkMode]);

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
				<div className={`dot absolute left-1 top-1 bg-darkModeEllipse w-6 h-6 rounded-full transition transform ${isDarkMode ? 'translate-x-full' : ''}`}>
					{isDarkMode ? <FaMoon className="text-white" /> : <FaSun className="text-yellow-500" />}
				</div>
			</div>
			<span className="ml-3 text-darkModeText font-bold text-[15px] leading-[1.134rem] tracking-[.25em]">
				{t("DARK_MODE")}
			</span>
		</label>
	);
};

export default DarkModeToggle;
