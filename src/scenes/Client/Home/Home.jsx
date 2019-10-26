import React from "react";
import ReadMore from "../../components/Misc/ReadMoreButton";
// services
import { scrollToDiv } from "../../services";
// statiscs
import Background from "./salon.jpg";
// styles
import { styled } from "@material-ui/core/styles";

const Div = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "130vh",
  color: "white",
  backgroundColor: theme.palette.green.main
}));

const Img = styled("div")({
  height: "35vw",
  width: "35vw",
  position: "absolute",
  left: "50%",
  top: "20%",

  backgroundImage: `url(${Background})`,
  /* Center and scale the image nicely */
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain"
});

const PresentationDiv = styled("div")({
  width: "30vw",
  position: "absolute",
  left: "10%",
  top: "45%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const Slogan = styled("h1")({
  margin: 0,
  padding: 0,
  left: "10%",
  top: "45%",
  textAlign: "center",
  fontSize: 40
});

const Dividier = styled("div")(({ theme }) => ({
  width: "20vw",
  height: 2,
  margin: "15px 0",
  backgroundColor: theme.palette.red.main
}));

const Description = styled("p")({
  margin: 0,
  padding: 0,
  textAlign: "center",

  /* offset to read more button */
  marginBottom: 25
});

const Home = () => {
  return (
    <Div>
      <PresentationDiv>
        <Slogan>Neque porro quisquam</Slogan>
        <Dividier />
        <Description>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </Description>
        <ReadMore onClick={() => scrollToDiv("solution")} />
      </PresentationDiv>
      <Img id="home"></Img>
    </Div>
  );
};

export default Home;
