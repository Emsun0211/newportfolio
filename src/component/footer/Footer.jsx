import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<a href='#top' className='footer__logo'>
				Gbenga Akinnukawe
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#top'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				{/* <li><a href="#services">Services</a></li> */}
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				{/* <li><a href="#testimonial">Testimonials</a></li> */}
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://www.linkedin.com/in/gbenga-akinnukawe/'>
					<BsLinkedin />{" "}
				</a>
				<a href='https://github.com/Emsun0211'>
					<BsGithub />
				</a>
				<a href='https://twitter.com/Emiloluwa'>
					<BsTwitter />
				</a>
			</div>

			<div className='footer__copyright'>
				<p>Built with ReactJS, SwiperJS & EmailJS</p>
				<small>&copy; Gbenga 2023. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
