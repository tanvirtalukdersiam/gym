import React from "react";
import Nabvar from "./components/Nabvar";
import Hero from "./components/Hero";
import bgImbody from "../src/assets/bgImg.png";

const bgStyle = {
  backgroundImage: `url(${bgImbody})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};
const App = () => {
  return (
    //
    <div className="overflow-x-hidden px-[1rem] sm:px-[2rem] md:px-[2.4rem] lg:px-[3rem] xl:px-[4rem] 2xl:px-[5rem] ">
      <div style={bgStyle}>
        <Nabvar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
