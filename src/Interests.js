import React from 'react';
import "./Interests.css";

function Interests() {
    return (
        <div>
            <section id="interests">
                <h2>Interests</h2>
                <div className="interests-cards-container">
                    <div className="interests-card">
                        <div className="card">
                            <i className="zmdi zmdi-tv font-orangered interest-icon"></i>
                            <h3 className="card_title">Movie</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="card">
                            <i className="zmdi zmdi-laptop font-orangered interest-icon"></i>
                            <h3 className="card_title">Coding</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="card">
                            <i className="zmdi zmdi-radio font-orangered interest-icon"></i>
                            <h3 className="card_title">Music</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="card">
                            <i className="zmdi zmdi-smartphone font-orangered interest-icon"></i>
                            <h3 className="card_title">Gaming</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="card">
                            <i className="zmdi zmdi-library font-orangered interest-icon"></i>
                            <h3 className="card_title">Reading</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Interests;
