import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What are shoes?",
            answer: "a covering for the foot, typically made of leather, having a sturdy sole and not reaching above the ankle."
        },
        {
            question: "what is cost?",
            answer: "Cost is the value of money that has been used up to produce something or deliver a service, and hence is not available for use anymore."
        },
        {
            question: "Home delivery is available?",
            answer: "No, but for you its yes."
        },
        {
            question: "What are shoes?",
            answer: "a covering for the foot, typically made of leather, having a sturdy sole and not reaching above the ankle."
        },
        {
            question: "what is cost?",
            answer: "Cost is the value of money that has been used up to produce something or deliver a service, and hence is not available for use anymore."
        },
        {
            question: "Home delivery is available?",
            answer: "No, but for you its yes."
        },
        {
            question: "What are shoes?",
            answer: "a covering for the foot, typically made of leather, having a sturdy sole and not reaching above the ankle."
        },
        {
            question: "what is cost?",
            answer: "Cost is the value of money that has been used up to produce something or deliver a service, and hence is not available for use anymore."
        },
        {
            question: "Home delivery is available?",
            answer: "No, but for you its yes."
        },
      
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container">
            <h1 className="title font-bold">Frequently Asked Questions</h1>
            <div className="faqList">
                {faqData.map((item, index) => (
                    <div key={index} className="faqItem">
                        <div 
                            onClick={() => toggleAnswer(index)} 
                            className="question"
                        >
                            {item.question}
                        </div>
                        {activeIndex === index && (
                            <div className="answer">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
