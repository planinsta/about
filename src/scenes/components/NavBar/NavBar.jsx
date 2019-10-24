import styled from "styled-components";

export default styled.header`
  width: 100vw;
  height: ${props => `${props.theme.heights.navBar}px`};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: ${props => (props.hide ? "#afafaf" : props.theme.blue)};
  border-bottom: 1px solid grey;
  background: ${props => !props.hide && "white"};
  font-size: 15px;
`;
