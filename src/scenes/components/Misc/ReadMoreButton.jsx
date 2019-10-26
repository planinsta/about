import React from "react";
// material-ui
import Button from "@material-ui/core/Button";
// styles
import { withStyles } from "@material-ui/core/styles";

const MaterialUiButton = withStyles({
  root: {
    fontWeight: 550,
    marginLeft: "5%"
  }
})(({ classes, ...rest }) => (
  <Button
    color="secondary"
    variant="contained"
    classes={{ root: classes.root, label: classes.label }}
    {...rest}
  />
));

const ReadMoreButton = ({ label = "Vezi mai mult", ...props }) => {
  return <MaterialUiButton {...props}>{label}</MaterialUiButton>;
};

export default ReadMoreButton;
