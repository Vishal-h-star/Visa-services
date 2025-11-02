import React, { useState } from 'react';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = [
    {
      title: "Fast & Secure",
      content: "We process most eVisa applications within a few hours. Your personal and payment details are always protected through advanced SSL encryption, giving you a safe and smooth online experience."
    },
    {
      title: "Expert Support",
      content: "Our team carefully reviews every application to fix errors and ensure all requirements are met before submission — resulting in a high approval rate and hassle-free process."
    },
    {
      title: "Customer-Focused",
      content: "Our friendly, multilingual support team is here for you 24/7 by chat, email, or phone. We make sure your questions are answered quickly and clearly, every step of the way."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="why-choose-us">
      <h4 className="section-title"><b>Why Choose Us?</b></h4>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div 
            key={index} 
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;