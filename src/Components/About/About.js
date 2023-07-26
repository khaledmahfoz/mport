import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

import Author from "../../assets/images/about/author.png";

function About() {
	return (
		<section className="py-10" id="about">
			<Container>
				<SectionHeader number="01" title="About">
					<div className="py-10 lg:flex items-center justify-between gap-x-5">
						<div className="my-10 mx-auto max-w-[400px] lg:w-1/2 lg:max-w-[500px] lg:mr-auto">
							<img className="w-full" src={Author} alt="author" />
						</div>
						<div className="text-[20px] lg:text-[22px] text-dark lg:w-1/2">
							Innovative Front End Developer with 5 years experience building
							and maintaining responsive websites in the recruiting industry.
							Proficient in HTML, CSS, jQuery, JavaScript and Angualr; plus
							modern libraries and frameworks. Passionate about usability and
							possess working knowledge of Adobe Photoshop & Sketch.
						</div>
					</div>
				</SectionHeader>
			</Container>
		</section>
	);
}

export default About;
