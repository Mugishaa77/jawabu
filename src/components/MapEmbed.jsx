import React from 'react';

function MapEmbed() {
  return (
    <div>
      
      <div  className="embed">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510595.225520695!2d36.67926690549235!3d-1.1424520441951085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e85eba7de0d%3A0xd8ba5fa73ef57033!2sThika%20Town!5e0!3m2!1sen!2ske!4v1726041285151!5m2!1sen!2ske" 
      width="100%" 
      height="100%"
       style={{border: '0'}}
        allowfullscreen=""
         loading="lazy"
       referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default MapEmbed;
