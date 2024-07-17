import AboutMe from "../../component/ProfileContent/AboutMe";
import ProfileContent from "../../component/ProfileContent/Profile";

const Profile = () => {
	return (
		<div className=" md:p-8 lg:p-6 border-b border-gray-300 dark:border-gray-700 pb-4">
			<div className="mb-8 text-center md:text-left ">
				<p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
					Profile
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-8">
				<div className="flex-1 ">
					<ProfileContent />
				</div>
				<div className="flex-1 ">
					<AboutMe />
				</div>
			</div>
		</div>
	);
};

export default Profile;
