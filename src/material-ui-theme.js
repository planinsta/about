import { createMuiTheme } from "@material-ui/core/styles";
import styledTheme from "./theme";

export default createMuiTheme({
  palette: {
    primary: {
      main: styledTheme.blue
    },
    secondary: {
      main: styledTheme.red
    }
  }
});
