import { styled } from "@material-ui/core/styles";

export default styled("h1")({
  height: "100%",
  margin: 0,
  marginRight: "15%",
  display: "flex",
  alignItems: "center",
  padding: 0,
  cursor: "pointer",
  fontSize: "2em",
  transition: "transform 300ms",
  "&:hover": {
    transform: "scale(1.1)"
  }
});
