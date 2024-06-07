import React from 'react';
import "./About.css";

function About() {
    return (
        <div>
            <section id="about">
                <div className="card">
                    <img src="https://github.com/surajguduru/Portfolio_1/blob/main/src/profile_photo.jpg" alt="Profile-Photo" />
                    <div className="card-content">
                        <h2>Suraj Guduru</h2>
                        <p>Developer • Gamer • Learner</p>
                        <button id="resume"><a href="#">Download Resume</a></button>
                        <button id="contact-btn"><a href="#">Contact</a></button>
                        <p>💻 Currently studying at Scaler School of Technology 🚀</p>
                        <p>👨👨‍🎓 Pursuing Bachelor's of BITS Pilani.</p>
                        <p>🧩 Interested In : Technology, Astronomy, Politics.</p>
                        <p>💡 Equipments: Knowledge, Java, C, Python, Web Development, Backend Development</p>
                        <p>⚡ Fun Fact: Prefer Chai ☕ over coffee</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
