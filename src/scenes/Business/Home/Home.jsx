import React from "react";
// statics
import Background from "./fundal.jpg";
// styles
import { styled } from "@material-ui/core/styles";

const Img = styled("div")({
  width: "100vw",
  height: "130vh",

  backgroundImage: `url(${Background})`,
  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
});

const Home = () => {
  return <Img id="home" />;
};

export default Home;
