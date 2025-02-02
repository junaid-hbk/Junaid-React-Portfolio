import React, { useRef } from "react";
import "./Contact.css";
import { MdOutgoingMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const name = form.current.name.value;
        const email = form.current.email.value;
        const message = form.current.message.value;
        
        const mailtoLink = `mailto:junaidmansuri989@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutgoingMail className="contact_option_icon" />
                        <h4>Email</h4>
                        <h5>junaidmansuri989@gmail.com</h5>
                        <a href="mailto:junaidmansuri989@gmail.com">Send Message</a>
                    </article>

                    <article className="contact_option">
                        <BsGithub className="contact_option_icon" />
                        <h4>GitHub</h4>
                        <h5>github.com/junaid-hbk</h5>
                        <a href="https://github.com/junaid-hbk">Open</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
