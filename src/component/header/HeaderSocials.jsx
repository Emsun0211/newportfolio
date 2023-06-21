import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/akinnukawe-gbenga/'>
				<BsLinkedin />{" "}
			</a>
			<a href='https://github.com/Emsun0211'>
				<BsGithub />
			</a>
			<a href='https://twitter.com/Emiloluwa'>
				<BsTwitter />
			</a>
		</div>
	);
};

export default HeaderSocials;
