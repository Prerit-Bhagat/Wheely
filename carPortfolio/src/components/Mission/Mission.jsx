"use client"; // Ensure it's a client component if it needs interactivity later

import React from "react";
import "@/components/css/Mission.css"; // Importing the new CSS file

const Mission = () => {
  return (
    <section className="mission-container">
      {" "}
      {/* Changed to section for semantic HTML */}
      <div className="upper">
        <h2>OUR MISSION</h2>{" "}
        {/* Changed to h2 for semantic heading structure */}
      </div>
      <div className="Lower">
        <p className="firstpara">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quo doloribus provident maiores id? Quibusdam, ipsam. Voluptatem velit
          modi assumenda quam! Cum explicabo ipsam natus?
        </p>
        <p className="secondpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quidem doloremque tempora adipisci doloribus eum blanditiis et velit
          harum nemo ratione vel, accusamus enim in aliquid tenetur temporibus
          possimus. Vel?
        </p>
        <p className="thirdpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          voluptatem, aut illum voluptatum repellat ipsam debitis quo.
        </p>
      </div>
    </section>
  );
};

export default Mission;
