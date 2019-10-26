import React from "react";
// router
import { Link } from "react-router-dom";
// material-ui
import Button from "@material-ui/core/Button";
// styles
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const MaterialUiButton = withStyles(theme => ({
  root: {
    opacity: 0.8,
    backgroundColor: grey[50],
    border: `1px solid ${grey[300]}`,
    "&:hover": {
      backgroundColor: grey[50],
      opacity: 1
    }
  },
  label: {
    fontSize: 10,
    fontWeight: 550,
    color: theme.palette.green.main
  }
}))(Button);

const linkStyles = {
  position: "absolute",
  right: "10%"
};

const MaterialUiButtonRouter = ({ children, to }) => {
  return (
    <Link style={linkStyles} {...{ to }}>
      <MaterialUiButton>{children}</MaterialUiButton>
    </Link>
  );
};

export default MaterialUiButtonRouter;
