import { useLanguage } from '../../hook/context/LanguageContext';

const ProfileContent = () => {
	const { t } = useLanguage();

	const profileData = [
		{ label: t("birth_date"), value: '24.03.1996' },
		{ label: t("residence_city"), value: 'Ankara' },
		{ label: t("education"), value: 'Hacettepe Ünv. Biyoloji Lisans, 2016' },
		{ label: t("preferred_role"), value: 'Frontend, UI' }
	];

	return (
		<div>
			<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-SkilsText mb-6">
				{t("profile_section")}
			</h2>
			<div className="space-y-4">
				{profileData.map((item, index) => (
					<div key={index} className="flex flex-col md:flex-row md:space-x-4">
						<p className="text-lg font-semibold text-gray-900 dark:text-white">{item.label}:</p>
						<p className="text-lg font-normal text-gray-600 dark:text-gray-300">{item.value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileContent;
