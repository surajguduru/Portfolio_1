import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div>
            <section id="portfolio">
                <h2>What I Do</h2>
                <div className="portfolio-cards-container">
                    <div className="portfolio-card">
                        <i class="zmdi zmdi-code font-blue profile-icon"></i>
                        <h3>Developer</h3>
                        <p>
                            I am a data engineer with 3+ years of experience working on Azure cloud. I have a strong background in ETL processes and have successfully completed multiple projects involving data ingestion, transformation, and loading. I am highly proficient in Python and have a strong understanding of SQL and data management principles. I am able to work effectively in both individual and team environments and am committed to delivering high-quality results.
                        </p>
                    </div>
                    <div className="portfolio-card">
                        <i class="zmdi zmdi-book font-yellow profile-icon"></i>
                        <h3>Learner</h3>
                        <p>
                            I am constantly learning and growing in my field. I am passionate about creating innovative solutions and using technology to solve real-world problems. I have a strong foundation in programming languages such as Java and Python, and am always eager to expand my skillset and take on new challenges. Whether I am working on a solo project or collaborating with a team, I thrive in a fast-paced and dynamic environment. I am excited to continue my career as a developer and make a positive impact in the tech industry.
                        </p>
                    </div>
                    <div className="portfolio-card">
                        <i class="zmdi zmdi-gamepad font-green profile-icon"></i>
                        <h3>Gamer</h3>
                        <p>
                            I am deeply passionate about video games and the diverse experiences they offer. As a Gamer, I appreciate the intricate design, engaging narratives, and the skillful artistry that goes into creating immersive gaming worlds. I enjoy exploring different genres, from action-packed shooters to thought-provoking RPGs, and I am always on the lookout for new titles and innovative gameplay mechanics. My enthusiasm for gaming extends beyond just playing. </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;