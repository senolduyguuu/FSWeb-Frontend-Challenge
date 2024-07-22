/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/logo.png';
import { useLanguage } from '../../hook/context/LanguageContext';

const Navbar = () => {
	const { t } = useLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);  // Menu'yu referans olarak alıyoruz

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav className="dark:bg-gray-900 shadow-md">
			<div className="container mx-auto px-4 lg:max-w-5xl xl:max-w-6xl py-4 flex items-center justify-between">
				<div className="flex items-center">
					<img src={logo} alt="logo" className="h-8 w-auto" />
				</div>
				<div className="hidden md:flex md:space-x-12">
					<Link to="/skills" className="text-navTextColor text-lg leading-7 font-medium hover:text-indigo-600">{t("skills")}</Link>
					<Link to="/projects" className="text-navTextColor text-lg leading-7 font-medium hover:text-indigo-600">{t("projects")}</Link>
					<Link to="form-page">
						<button className="font-medium text-md text-navText border-2 border-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white">
							{t("hire_me_button")}
						</button>
					</Link>
				</div>
				<div className="md:hidden flex items-center">
					<button onClick={handleMenuToggle} className="text-gray-500 dark:text-white focus:outline-none">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							{isMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
							)}
						</svg>
					</button>
				</div>
			</div>
			<div
				ref={menuRef}
				className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md`}
			>
				<div className="flex flex-col items-center space-y-4 py-4">
					<Link to="/skills" className="text-navTextColor text-lg leading-7 font-medium hover:text-indigo-600">{t("skills")}</Link>
					<Link to="/projects" className="text-navTextColor text-lg leading-7 font-medium hover:text-indigo-600">{t("projects")}</Link>
					<Link to="form-page">
						<button className="font-medium text-md text-navText border-2 border-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white">
							{t("hire_me_button")}
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
