import Project1 from "../../assets/ProjectsImg/Rectangle 41 (1).png";
import Project2 from "../../assets/ProjectsImg/Rectangle 41 (2).png";
import Project3 from "../../assets/ProjectsImg/Rectangle 41.png";
import { useLanguage } from '../../hook/context/LanguageContext';
import ProjectBtn from "./ProjectsBtn";
import ProjectsLink from "./ProjectsLink";

const ProjectsContent = () => {
	const { t } = useLanguage();

	const projects = [
		{
			img: Project1,
			title: t("workintech"),
			description: t("workintech_description")
		},
		{
			img: Project2,
			title: t("random_jokes"),
			description: t("random_jokes_description")
		},
		{
			img: Project3,
			title: t("journey"),
			description: t("journey_description")
		}
	];

	return (
		<div className="p-4 md:p-8 lg:p-6">
			<div className="mb-8 ">
				<p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
					{t("projects_section")}
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<div key={index} className="flex flex-col items-center space-y-4 p-4 bg-white dark:bg-gray-800 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
						<img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-md" />
						<h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white font-semibold">{project.title}</h2>
						<p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 text-center">
							{project.description}
						</p>
						<ProjectBtn />
					</div>
				))}
			</div>
			<div className="mt-8">
				<ProjectsLink />
			</div>
		</div>
	);
}

export default ProjectsContent;
