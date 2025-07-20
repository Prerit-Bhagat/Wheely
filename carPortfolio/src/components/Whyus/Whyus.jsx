import React from 'react';
import Whyuscard from './Whyuscard'; // Importing the Whyuscard component
import '../css/whyus.css'; // Importing the CSS file

// Data for the cards
const Pictures = [
  { url: "/image-1.jpg", title: "Financing Options", description: "Flexible financing options to suit your needs." },
  { url: "/image-2.jpg", title: "Satisfied Customers", description: "Thousands of happy customers trust us." },
  { url: "/image-3.jpg", title: "Fast & Easy Booking", description: "Quick and hassle-free booking process." },
];

const Whyus = () => {
  return (
    <div className="whyus-container">
      {/* Upper Section */}
      <div className="upper">
        <h2>Why choose Wheely?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ad
          praesentium magni hic distinctio eius.
        </p>
      </div>
      
      {/* Lower Section */}
      <div className="lower">
        {Pictures.map((picture, index) => (
          <Whyuscard
            key={index}
            url={picture.url}
            title={picture.title}
            description={picture.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Whyus;
