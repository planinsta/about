import styled from "styled-components";

export default styled.h1`
  height: 100%;
  margin: 0;
  margin-right: 15%;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-size: 2em;
  transition: all 300ms;
  &:hover {
    color: ${props => props.hide && "#efefef"};
    font-size: 2.1em;
  }
`;
