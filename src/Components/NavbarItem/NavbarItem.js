function NavbarItem({ title, icon, alt }) {
	return (
		<div className="text-center rounded-md text-sm text-dark font-bold">
			<img className="mx-auto mb-2 w-[24px] h-[24px]" src={icon} alt={alt} />
			<div>{title}</div>
		</div>
	);
}

export default NavbarItem;
