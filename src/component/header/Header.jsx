import React, { useContext } from "react";
import CTA from "./cta";
import HeaderSocials from "./HeaderSocials";
import profileImage from "../../assets/gbenga.png";
import { VscSymbolColor } from "react-icons/vsc";
import "./header.css";
import { ThemeManager } from "../../context/ThemeTypes";

const Header = () => {
	const { isDarkMode } = useContext(ThemeManager);
	return (
		<header id='top'>
			<div className='container header__container'>
				<h5>Hi, I'm</h5>
				<h1>Gbenga Akinnukawe</h1>
				<h5 className=''>I'm a Frontend and Mobile App Developer</h5>
				<CTA isDarkMode={isDarkMode} />
				<HeaderSocials />

				<div className='header__profile-image-container'>
					<img src={profileImage} className='profileImage' alt='me' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
