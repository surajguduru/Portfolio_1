import React from 'react';
import "./Interests.css";

function Interests() {
    return (
        <div>
            <section id="interests">
                <h2>Interests</h2>
                <div className="interests-cards-container">
                    <div className="interests-card">
                        <div className="interests-card-box">
                            <i className="zmdi zmdi-tv font-orangered interests-icon"></i>
                            <h3 className="interests-card-title">Movie</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="interests-card-box">
                            <i className="zmdi zmdi-laptop font-orangered interests-icon"></i>
                            <h3 className="interests-card-title">Coding</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="interests-card-box">
                            <i className="zmdi zmdi-radio font-orangered interests-icon"></i>
                            <h3 className="interests-card-title">Music</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="interests-card-box">
                            <i className="zmdi zmdi-smartphone font-orangered interests-icon"></i>
                            <h3 className="interests-card-title">Gaming</h3>
                        </div>
                    </div>
                    <div className="interests-card">
                        <div className="interests-card-box">
                            <i className="zmdi zmdi-library font-orangered interests-icon"></i>
                            <h3 className="interests-card-title">Reading</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Interests;
