import React from "react";
// Business
import BusinessNavBar from "./scenes/Business/NavBar/NavBar";
import BusinessHome from "./scenes/Business/Home/Home";
import BusinessSolution from "./scenes/Business/Solution/Solution";
import BusinessProcess from "./scenes/Business/Process/Process";
import BusinessAdvantajes from "./scenes/Business/Advantajes/Advantajes";
import BusinessContact from "./scenes/Business/Contact/Contact";
// Client
import ClientNavBar from "./scenes/Client/NavBar/NavBar";
import ClientHome from "./scenes/Client/Home/Home";
import ClientSolution from "./scenes/Client/Solution/Solution";
import ClientProcess from "./scenes/Client/Process/Process";
import ClientAdvantajes from "./scenes/Client/Advantajes/Advantajes";
import ClientContact from "./scenes/Client/Contact/Contact";
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// styles
import styled from "styled-components";

const rootId = "app-root";
const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const App = () => {
  const [hideNavBar, setHideNavBar] = React.useState(true);

  /* make nav bar visible */
  React.useEffect(() => {
    const scrollTracker = () => {
      const elem = document.getElementById(rootId);
      const rect = elem.getBoundingClientRect();

      if (-rect.top > 40) {
        setHideNavBar(false);
      } else {
        setHideNavBar(true);
      }
    };

    document.addEventListener("scroll", scrollTracker);
    return () => {
      document.removeEventListener("scroll", scrollTracker);
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Root id={rootId}>
          <Route exact path="/">
            <ClientNavBar hide={hideNavBar} />
            <ClientHome />
            <ClientSolution />
            <ClientProcess />
            <ClientAdvantajes />
            <ClientContact />
          </Route>
          <Route exact path="/business">
            <BusinessNavBar hide={hideNavBar} />
            <BusinessHome />
            <BusinessSolution />
            <BusinessProcess />
            <BusinessAdvantajes />
            <BusinessContact />
          </Route>
        </Root>
      </Switch>
    </Router>
  );
};

export default App;
