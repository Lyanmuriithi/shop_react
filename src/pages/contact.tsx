import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

const Contact: React.FC = () => {
    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1>Contact Us</h1>
                    <p>Welcome to the contact us page!</p>
                        <ProtectedRoute/>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form> 
                    
                        <p>Please log in to access this page.</p>
                    
                    
                    <div className="mt-3">
                        <button className="btn btn-primary mr-2" onClick={handleAboutClick}>Home</button>
                        <button className="btn btn-primary" onClick={handleContactClick}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
