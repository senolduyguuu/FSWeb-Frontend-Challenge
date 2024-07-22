import AboutMe from "../../component/ProfileContent/AboutMe";
import ProfileContent from "../../component/ProfileContent/Profile";

const Profile = () => {
	return (
		<div className=" border-b mt-12">
			<div className="mb-8 text-center md:text-left ">
				<p className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-10 text-ProfileColor">
					Profile
				</p>
			</div>
			<div className="flex flex-col md:flex-row justify-between	">
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
