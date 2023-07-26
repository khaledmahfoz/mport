import Container from "../Container/Container";

import Hero from "../../assets/images/hero.png";
import O from "../../assets/images/header/o.svg";
import X from "../../assets/images/header/x.svg";
import Block from "../../assets/images/header/block.svg";

function Header() {
	return (
		<header className="py-10">
			<Container>
				<div className="md:grid md:grid-cols-2 md:gap-x-7 min-h-screen">
					<section className="text-left">
						<h1 className="text-[45px] font-bold">
							Hi, I’m <span className="text-blue">Mohamed Moamen</span>
						</h1>
						<div className="text-[25px] mb-5 font-bold">
							A <span className="text-blue">Front-End </span>
							Developer
						</div>
						<p className="mb-7 text-lg">
							A Frontend Focused in development & Building the Frontend of Web
							Apps.
						</p>
						<button className="py-5 bg-blue text-white font-bold w-full text-[18px]">
							Contact Me
						</button>
					</section>
					{/* <section className="mt-10">
						<div className="grid grid-cols-[100px_100px] gap-[50px] justify-center">
							<div className="animate-travelTopLeft">
								<img className="w-[100px] h-[100px]" src={Block} />
							</div>
							<div className="animate-travelTopRight">
								<img className="w-[100px] h-[100px]" src={O} />
							</div>

							<div className="animate-travelBottomLeft">
								<img className="w-[100px] h-[100px]" src={X} />
							</div>
							<div className="animate-travelBottomRight">
								<img className="w-[100px] h-[100px]" src={Block} />
							</div>
						</div>
					</section> */}
					<section></section>
				</div>
			</Container>
		</header>
	);
}

export default Header;
