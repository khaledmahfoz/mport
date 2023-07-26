import React, { useEffect, useState } from "react";

function Navbar() {
	const [colorChange, setColorchange] = useState(false);

	const routes = [
		{
			id: 1,
			title: "Home",
			link: "home",
		},
		{
			id: 2,
			title: "About Me",
			link: "about",
		},
		{
			id: 3,
			title: "Work",
			link: "work",
		},
		{
			id: 4,
			title: "Skills",
			link: "skills",
		},
		{
			id: 5,
			title: "Contact",
			link: "contact",
		},
	];

	const changeNavbarColor = () => {
		if (window.scrollY > 0) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNavbarColor);
	});

	return (
		<div
			className={`hidden lg:flex justify-center items-center font-sans py-5 text-xl fixed left-0 w-full z-50 transition ${
				colorChange ? "bg-blue text-white" : ""
			}`}
		>
			{routes.map((route) => {
				return (
					<a className="mx-2.5" id={route.id} href={`#${route.link}`}>
						{route.title}
					</a>
				);
			})}
		</div>
	);
}

export default Navbar;
