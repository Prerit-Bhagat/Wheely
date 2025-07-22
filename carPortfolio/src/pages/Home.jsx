import React from "react";
import Hero from "@/components/Hero/Hero.jsx";
// import Featured from "../components/Featured/Featured.jsx";
import Whyus from "@/components/Whyus/Whyus.jsx";
import Mission from "@/components/Mission/Mission.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Featured/> */}
      <Whyus />
      <Mission />
    </div>
  );
};

export default Home;
