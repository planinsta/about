import React from "react";
// styles
import { styled } from "@material-ui/core/styles";

const Wrapper = styled("div")({
  height: 500,
  width: "100vw"
});

const Contact = () => {
  return (
    <Wrapper id="contact">
      <h1>Contact business</h1>
    </Wrapper>
  );
};

export default Contact;
