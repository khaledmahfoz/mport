function NavbarItem({ title, icon, alt, link }) {
	return (
		<a
			className="text-center rounded-md text-sm text-dark font-bold"
			href={`#${link}`}
		>
			<img className="mx-auto mb-2 w-[24px] h-[24px]" src={icon} alt={alt} />
			<span>{title}</span>
		</a>
	);
}

export default NavbarItem;
