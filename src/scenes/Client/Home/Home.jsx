import React from "react";
import styled from "styled-components";
import Background from "./fundal.jpg";

const Img = styled.div`
  width: 100vw;
  height: 130vh;

  background-image: url(${Background});
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Home = () => {
  return <Img id="home"></Img>;
};

export default Home;
