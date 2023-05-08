import IconMoon from "./icons/IconMoon";

const Header = () => {
	return (
		<div className="header">
			<h1 className="header-title">Todo</h1>
			<button className="header-theme">
				<IconMoon />
			</button>
		</div>
	);
};

export default Header;
