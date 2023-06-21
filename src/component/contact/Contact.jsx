import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_g4qclrg",
				"template_0bjg7lh",
				form.current,
				"eHUAoQ_479hMI3cFS"
			)
			.then(
				(result) => {
					alert("Message sent successfully");
				},
				(error) => {
					alert("Unable to send message: ");
				}
			);
		e.target.reset();
	};
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options-container'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>emsunconcept@gmail</h5>
						<a href='mailto:emsunconcept@gmail.com' target='blank'>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>Whatsapp</h4>
						<h5>+2347032352156</h5>
						<a
							href='https://wa.me/2347032352156?text=Hello%2C%20thanks%20for%20contacting%20us.%20We%20are%20available%20to%20get%20on%20your%20next%20web%20and%20mobile%20application%20project.'
							target='blank'>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<AiOutlineTwitter className='contact__option-icon' />
						<h4>Twitter</h4>
						<h5>Gbenga Akinnuakwe</h5>
						<a href='https://twitter.com/Emiloluwa' target='blank'>
							Send a message
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						placeholder='Your Message'
						rows='7'></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
