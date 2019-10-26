import React from "react";
// styles
import { styled } from "@material-ui/core/styles";

const Wrapper = styled("div")({
  height: 500,
  width: "100vw"
});

const Solutie = () => {
  return (
    <Wrapper id="solution">
      <h1>Solutie business</h1>
    </Wrapper>
  );
};

export default Solutie;
