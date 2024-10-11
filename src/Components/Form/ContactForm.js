import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import contactimg from '../../images/contactimg.png'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });
    const [submitMessage, setSubmitMessage] = useState(false); // To handle submission status
    const navigate = useNavigate(); // For navigation after submission

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission logic
        console.log(formData);

        // Set submitMessage to true when the form is submitted
        setSubmitMessage(true);
    };

    useEffect(() => {
        if (submitMessage) {
            // Redirect after 3 seconds
            const timer = setTimeout(() => {   
                navigate('/home');
            }, 3000);
            return () => clearTimeout(timer); // Cleanup timer on unmount
        }
    }, [submitMessage, navigate]);

    return (
        <div className="min-h-screen bg-slate-300 flex items-center justify-center p-6">
            <div className="bg-slate-500 text-white rounded-lg shadow-lg my-20 py-20 px-[80px] md:px-[190px] grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section (Image and Title) */}
                <div className="flex flex-col items-center justify-center mr-10">
                    <h2 className="text-4xl  md:text-5xl font-bold mb-6">Contact Us</h2>
                    <img
                        src={contactimg} // Replace with the actual image URL
                        alt="Contact Image"
                        className="w-full "
                    />
                </div>
                {/* Right Section (Form) */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="mt-1 w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {submitMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="text-center bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-lg text-white">Message sent! Redirecting...</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
