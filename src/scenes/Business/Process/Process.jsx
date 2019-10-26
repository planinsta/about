import React from "react";
// styles
import { styled } from "@material-ui/core/styles";

const Wrapper = styled("div")(({ theme }) => ({
  height: 500,
  width: "100vw",
  backgroundColor: theme.palette.green.main
}));

const Process = () => {
  return (
    <Wrapper id="process">
      <h1>Proces business</h1>
    </Wrapper>
  );
};

export default Process;
