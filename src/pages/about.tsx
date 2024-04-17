import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1>About Us</h1>
                    <p>Welcome to the about us page!</p>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={handleContactClick}>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
