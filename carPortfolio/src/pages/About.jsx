// // import React from "react";

// // const About = () => {
// //   return (
// //     <div className="center">
// //       <div className="Top-container">About Wheely</div>
// //       <div className="Mid-container">
// //         <p className="Who">Who we are</p>
// //         <p className="Info">
// //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
// //           nostrum magni repellendus modi quaerat dolor, eaque veniam animi odio
// //           reiciendis perferendis facilis quae, explicabo sequi quis ratione quam
// //           in amet mollitia possimus. Corporis, repellat! Officia quod, error,
// //           nemo animi sequi unde architecto eaque maxime ea molestias quia dolore
// //           rerum tenetur asperiores nam suscipit natus ad magni, deserunt
// //           pariatur corporis mollitia? Totam iure dolor sit dolores? Quisquam
// //           distinctio harum, commodi nihil odit explicabo qui quaerat quos
// //           accusantium ab eaque architecto quibusdam molestias necessitatibus?
// //           Provident temporibus beatae unde adipisci id sequi inventore, quidem a
// //           voluptatum doloribus facilis quos enim omnis eveniet voluptatibus?
// //         </p>
// //       </div>
// //       <div className="Last-container">
// //         <div className="Contact">Contact us today</div>
// //         {/* <div>
// //               <img src="" alt="" />
// //               <p>FeedBack</p>
// //               <button>Leave Feedback</button>
// //           </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;

// import React from "react";
// import "@/components/css/About.css"; // Importing the CSS file

// const About = () => {
//   // Renamed to About to avoid conflict with page.tsx
//   return (
//     <div className="about-container">
//       <div className="about-header">
//         <h1>About Our Company</h1>
//         <p>Driving innovation and excellence in the automotive industry.</p>
//       </div>

//       <div className="about-content">
//         <div className="about-text">
//           <p>
//             Welcome to our platform, where passion for automobiles meets
//             cutting-edge technology. Founded in [Year], our mission has always
//             been to connect car enthusiasts and buyers with their dream
//             vehicles, offering an unparalleled selection and a seamless
//             experience.
//           </p>
//           <p>
//             We believe in transparency, quality, and customer satisfaction. Our
//             dedicated team works tirelessly to ensure every listing is accurate,
//             every detail is verified, and every interaction is positive. From
//             luxury sedans to rugged SUVs, we strive to provide comprehensive
//             information and tools to help you make informed decisions.
//           </p>
//           <p>
//             Beyond just selling cars, we are building a community. We are
//             constantly evolving, integrating new features and services to
//             enhance your journey, whether you're browsing, buying, or simply
//             exploring the world of cars.
//           </p>
//         </div>
//         <div className="about-image">
//           {/* Using standard <img> tag */}
//           <img
//             src="/placeholder.svg?height=300&width=400"
//             alt="Our Team Working"
//             width={400}
//             height={300}
//           />
//         </div>
//       </div>

//       <div className="about-values">
//         <h2>Our Core Values</h2>
//         <ul>
//           <li>Innovation: Constantly seeking new ways to improve.</li>
//           <li>Integrity: Upholding honesty and ethical practices.</li>
//           <li>Customer Focus: Prioritizing your needs and satisfaction.</li>
//           <li>
//             Excellence: Striving for the highest standards in everything we do.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "@/components/css/About.css"; // Ensure this path is correct

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me & This Platform</h1>
        <p>
          Empowering users with smart tools to explore the world of automobiles.
        </p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Prerit Bhagat</strong> — a passionate developer and
            tech enthusiast with a deep interest in building impactful digital
            products. This platform reflects my journey of merging innovation
            with my fascination for the automotive industry.
          </p>
          <p>
            The idea behind this project was simple: to create a place where
            users can effortlessly explore, analyze, and discover cars — whether
            they’re passionate enthusiasts or serious buyers. What started as a
            coding experiment quickly evolved into a mission to simplify the car
            discovery experience.
          </p>
          <p>
            Built with modern web technologies like React, Node.js, and MongoDB,
            this site emphasizes speed, accuracy, and user experience. From
            backend authentication to clean UI and real-time interactions —
            every feature is hand-coded to reflect attention to detail.
          </p>
          <p>
            I believe in continuous learning, clean code, and solving real-world
            problems through tech. This project is not just a product, it’s a
            reflection of my growth as a developer.
          </p>
        </div>
        <div className="about-image">
          <img
            src="Main-Logo-2.svg" // Replace with real image later
            alt="Building the platform"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="about-values">
        <h2>My Core Values</h2>
        <ul>
          <li>
            <strong>Curiosity:</strong> Always asking 'why' and 'how' to dig
            deeper.
          </li>
          <li>
            <strong>Craftsmanship:</strong> Clean, scalable, and maintainable
            code is key.
          </li>
          <li>
            <strong>User-Centric:</strong> Designing with real users in mind,
            not just features.
          </li>
          <li>
            <strong>Growth:</strong> Every project is a step forward in learning
            and building better.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
