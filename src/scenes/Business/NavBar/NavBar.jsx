import React from "react";
import Link from "../../components/NavBar/Link";
import Menu from "../../components/NavBar/Menu";
import Title from "../../components/NavBar/Title";
import NavBar from "../../components/NavBar/NavBar";
import MaterialUiRouterButton from "../../components/Misc/SwitchContextButton";
// services
import { scrollToDiv, scrollToTop } from "../../services";
// icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const BusinessNavBar = ({ hide = true }) => {
  React.useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <NavBar {...{ hide }}>
      <Title onClick={scrollToTop} {...{ hide }}>
        PlanInsta
      </Title>
      <Menu>
        <Link onClick={() => scrollToDiv("solution")} {...{ hide }}>
          SOLUTIE
        </Link>
        <Link onClick={() => scrollToDiv("process")} {...{ hide }}>
          PROCES
        </Link>
        <Link onClick={() => scrollToDiv("advantajes")} {...{ hide }}>
          AVANTAJE
        </Link>
        <Link onClick={() => scrollToDiv("contact")} {...{ hide }}>
          CONTACT
        </Link>
      </Menu>
      <MaterialUiRouterButton to="/">
        <span>Solutii client</span>
        <ArrowForwardIcon />
      </MaterialUiRouterButton>
    </NavBar>
  );
};

export default BusinessNavBar;
