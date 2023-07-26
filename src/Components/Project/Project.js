import Github from "../../assets/images/icons/social/github.svg";
import Demo from "../../assets/images/icons/demo.svg";

function Project(project) {
	return (
		<div className="bg-white rounded-[20px] p-5 pt-[50px] mb-5 shadow-sm relative lg:max-w-[450px]">
			<div className="bg-gray-300 absolute -right-1 top-0 w-[130px] h-[48px] rounded-bl-[20px]"></div>
			<div className="bg-gray-200 absolute right-0 top-2 w-[130px] h-[40px] rounded-tr-[20px] rounded-bl-[20px]">
				<div className="flex items-center justify-center h-full">
					<a href={project.source} className="mr-7">
						<img className="w-[24px] h-[24px]" src={Github} alt="github" />
					</a>
					{project.demo ? (
						<a href={project.demo}>
							<img className="w-[24px] h-[24px]" src={Demo} alt="demo" />
						</a>
					) : null}
				</div>
			</div>
			<div className="mb-2.5 mt-2.5 font-sans font-bold text-2xl text-dark">
				{project.title}
			</div>
			<p className="mb-2.5 text-gray-100">{project.description}</p>
			<ul className="flex flex-wrap pb-5">
				{project.tags.map((tag) => {
					return (
						<span
							key={tag}
							className="px-5 py-0.5 mt-2.5 mr-2.5 rounded-[20px] bg-gray-200 text-gray-100"
						>
							{tag}
						</span>
					);
				})}
			</ul>
		</div>
	);
}

export default Project;
