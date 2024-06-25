import React from 'react';
import "./About.css";
import profilePic from './profile_pic.png';

function About() {
    return (
        <div>
            <section id="about">
                <div className="card">
                    <img src={profilePic} alt="Profile-Photo" />
                    <div className="card-content">
                        <h2>Suraj Guduru</h2>
                        <p>Developer • Gamer • Learner</p>
                        <button id="resume" className="button button-resume">
                            <a href="#">DOWNLOAD RESUME</a>
                        </button>
                        <button id="contact-btn" className="button button-contact">
                            <a href="#contact">CONTACT</a>
                        </button>
                        <p>💻 Currently studying at Scaler School of Technology 🚀</p>
                        <p>👨‍🎓 Pursuing Bachelor's at BITS Pilani.</p>
                        <p>🧩 Interested In : Technology, Astronomy, Politics.</p>
                        <p>💡 Equipments: Knowledge, Java, Python, Web Development, Backend Development.</p>
                        <p>⚡ Fun Fact: Prefer Chai ☕ over coffee</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
