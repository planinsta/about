import React from "react";
import Link from "../../components/NavBar/Link";
import Menu from "../../components/NavBar/Menu";
import Title from "../../components/NavBar/Title";
import NavBar from "../../components/NavBar/NavBar";
import MaterialUiRouterButton from "../../components/Misc/MaterialUiButtonRouter";
import { scrollToDiv, scrollToTop } from "../../services";

const ClientNavBar = ({ hide = true }) => {
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
      <MaterialUiRouterButton label={"Solutii business"} to="/business" />
    </NavBar>
  );
};

export default ClientNavBar;
