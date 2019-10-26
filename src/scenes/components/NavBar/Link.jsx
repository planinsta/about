import { styled } from "@material-ui/core/styles";

export default styled("header")({
  fontWeight: 550,
  fontSize: "1em",
  cursor: "pointer",
  transition: "transform 300ms",
  "&:hover": {
    transform: "scale(1.1)"
  }
});
