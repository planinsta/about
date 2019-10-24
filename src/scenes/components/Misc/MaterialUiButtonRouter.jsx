import React from "react";
// router
import { Link } from "react-router-dom";
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

const MaterialUiButtonRouter = ({ label, to }) => {
  return (
    <MaterialUiButton>
      <Link {...{ to }}>{label}</Link>
    </MaterialUiButton>
  );
};

export default MaterialUiButtonRouter;
