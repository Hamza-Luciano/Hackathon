import styled from "styled-components";

export default styled.header`
  background-color: black;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }

  .navBar {
    height: 10vh;
    color: greenyellow;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: stiky;
    min-height: 50px;
  }
  .navBarSolid {
    background-color: rgba(0, 0, 0, 0.9);
    color: greenyellow;
  }
  .navBarLogo {
    height: 90%;
    margin-right: 3rem;
  }
  h1 {
    font-size: 5rem;
  }
`;
