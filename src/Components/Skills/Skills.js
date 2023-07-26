import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

import skills from "../../data/skills";

function Skills() {
	return (
		<section className="py-10">
			<Container>
				<SectionHeader number="03" title="Skills" />
				<div className="grid md:grid-cols-skillsMd grid-cols-12 justify-items-center justify-center my-10">
					{skills.map((skill) => {
						return (
							<div
								key={skill.id}
								className={`${
									skill.newRow ? "col-start-2" : ""
								} rounded-full bg-white shadow-md col-span-2 p-2 md:p-5`}
							>
								<img
									className="w-[25px] h-[25px] object-contain"
									src={skill.icon}
									alt={skill.alt}
								/>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}

export default Skills;
