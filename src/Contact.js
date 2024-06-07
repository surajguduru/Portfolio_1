import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div class="contact-card">
                <div class="social-media-links-container">
                    <a href="https://github.com/surajguduru" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-github font-white back-black zmdi-hc-3x"></i></a>
                    <a href="https://www.linkedin.com/in/surajguduru/" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-linkedin font-white back-linkedin zmdi-hc-3x"></i></a>
                    <a href="https://twitter.com/GuduruSura38198" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-twitter font-white back-twitter zmdi-hc-3x"></i></a>
                    <a href="https://www.youtube.com/@SurajGuduru10012" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-youtube-play font-white back-youtube zmdi-hc-3x"></i></a>
                    <a href="https://www.instagram.com/suraj_guduru" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-instagram font-white back-instagram zmdi-hc-3x"></i></a>
                    {/* <a href="#" target="_blank" rel="noopener noreferrer" class="social-media-logo"><i class="zmdi zmdi-facebook font-white back-facebook zmdi-hc-3x"></i></a> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;