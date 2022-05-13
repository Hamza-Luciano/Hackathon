import styled from "styled-components";

export default styled.header`
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
    background-color: rgba(0, 0, 0, 0.9);
    color: greenyellow;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    position: stiky;
    width: 100vw;
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
