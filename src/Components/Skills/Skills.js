import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

import skills from "../../data/skills";

function Skills() {
	return (
		<section className="py-10" id="skills">
			<Container>
				<SectionHeader number="03" title="Skills">
					<div className="grid grid-cols-12 justify-items-center justify-center my-10 max-w-2xl mx-auto">
						{skills.map((skill) => {
							return (
								<div
									key={skill.id}
									className={`${
										skill.newRow ? "col-start-2" : ""
									} rounded-full bg-white shadow-md col-span-2 p-2 md:p-5`}
								>
									<img
										className="w-[25px] h-[25px] object-contain lg:w-[35px] lg:h-[35px]"
										src={skill.icon}
										alt={skill.alt}
									/>
								</div>
							);
						})}
					</div>
				</SectionHeader>
			</Container>
		</section>
	);
}

export default Skills;
