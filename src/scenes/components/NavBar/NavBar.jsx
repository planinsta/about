import { styled } from "@material-ui/core/styles";

export default styled("header")(({ theme, hide }) => ({
  width: "100vw",
  height: theme.heights.navBar,
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
  color: hide ? "white" : theme.palette.green.main,
  transition: "color 300ms linear",
  background: !hide && "white",
  // eslint-disable-next-line no-dupe-keys
  transition: "background-color 300ms linear",
  fontSize: 15,
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"
}));
