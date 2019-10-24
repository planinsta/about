import styled from "styled-components";

export default styled.a`
  font-weight: 550;
  font-size: 1em;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    color: ${props => props.hide && "#efefef"};
    font-size: 1.1em;
  }
`;
