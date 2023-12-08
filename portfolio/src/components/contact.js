import React from 'react';

const ContactForm = () => {
  return (
    <div className='container mx-auto my-10 p-8 flex items-center bg-gray-100 rounded-lg shadow-md'>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc3NPn0Mto34AyhoUUx1vEf1wBM9J10iGhrppirVpMeXW0W1A/viewform?embedded=true"
        width="640"
        height="375"        
        title="Contact Form"
      >
        Loading...
      </iframe>
    </div>
  );
};

export default ContactForm;
