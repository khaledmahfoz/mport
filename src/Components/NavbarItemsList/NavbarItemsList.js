import Home from "../../assets/images/icons/navigation/home.svg";
import About from "../../assets/images/icons/navigation/about.svg";
import Work from "../../assets/images/icons/navigation/work.svg";
import Skills from "../../assets/images/icons/navigation/skills.svg";
import Contact from "../../assets/images/icons/navigation/contact.svg";

import NavbarItem from "../NavbarItem/NavbarItem";

function NavbarItemsList() {
	const list = [
		{
			id: 1,
			title: "Home",
			icon: Home,
			alt: "home",
			link: "home",
		},
		{
			id: 2,
			title: "About Me",
			icon: About,
			alt: "about",
			link: "about",
		},
		{
			id: 3,
			title: "Work",
			icon: Work,
			alt: "work",
			link: "work",
		},
		{
			id: 4,
			title: "Skills",
			icon: Skills,
			alt: "skill",
			link: "skills",
		},
		{
			id: 5,
			title: "Contact",
			icon: Contact,
			alt: "contact",
			link: "contact",
		},
	];

	return (
		<div className="py-7 grid grid-cols-3 gap-5 items-center justify-center">
			{list.map((item) => {
				return <NavbarItem key={item.id} {...item} />;
			})}
		</div>
	);
}

export default NavbarItemsList;
