// import React from "react";
// import "@/components/css/Hero.css";
// const Home = () => {
//   return (
//     <div className="parent">
//       <div className="leftchild">
//         <h1>Find Your Perfect Ride Today</h1>
//         <p>Over 1000+ New Car Details Available</p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
//           temporibus, nesciunt excepturi minus culpa fugiat doloribus eos
//           asperiores. Sunt harum quasi corrupti illum accusamus, distinctio
//           exercitationem optio molestiae. Commodi vel suscipit veniam doloribus
//           exercitationem similique recusandae quasi cum qui, excepturi, quam
//           odio itaque molestias, enim quaerat distinctio provident repellendus
//           fugit!
//         </p>
//       </div>
//       <div className="rightchild">
//         <img src="Main-Logo-2.svg" alt="Logo" />
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 md:p-8 lg:p-12 gap-8 bg-background text-foreground"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left text block */}
      <div className="leftchild flex-1 space-y-4 text-center lg:text-left max-w-2xl">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          variants={textVariants}
        >
          Find Your Perfect Ride Today
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground"
          variants={textVariants}
        >
          Over 1000+ New Car Details Available
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-muted-foreground leading-relaxed"
          variants={textVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          temporibus, nesciunt excepturi minus culpa fugiat doloribus eos
          asperiores. Sunt harum quasi corrupti illum accusamus, distinctio
          exercitationem optio molestiae. Commodi vel suscipit veniam doloribus
          exercitationem similique recusandae quasi cum qui, excepturi, quam
          odio itaque molestias, enim quaerat distinctio provident repellendus
          fugit!
        </motion.p>
      </div>

      {/* Right image block */}
      <motion.div
        className="rightchild flex-1 flex justify-center items-center"
        variants={imageVariants}
      >
        <img
          src="/placeholder.svg"
          alt="Modern Sports Car"
          className="max-w-full h-auto rounded-lg shadow-lg"
          width="600"
          height="400"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
