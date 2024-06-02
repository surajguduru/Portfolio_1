import react from 'react';
import "./Interests.css";

function Interests() {
    return (
        <div>
            <section id="interests">
                <h2>Interests</h2>
                <div className="interests-cards-container">
                    <div className="interests-card">
                        <i class="zmdi zmdi-tv font-orangered interest-icon"></i>
                        <h3>Movie</h3>
                    </div>
                    <div className="interests-card">
                        <i class="zmdi zmdi-laptop font-orangered interest-icon"></i>
                        <h3>Coding</h3>
                    </div>
                    <div className="interests-card">
                        <i class="zmdi zmdi-radio font-orangered interest-icon"></i>
                        <h3>Music</h3>
                    </div>
                    <div className="interests-card">
                        <i class="zmdi zmdi-smartphone font-orangered interest-icon"></i>
                        <h3>Gaming</h3>
                    </div>
                    <div className="interests-card">
                        <i class="zmdi zmdi-library font-orangered interest-icon"></i>
                        <h3>Reading</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Interests;