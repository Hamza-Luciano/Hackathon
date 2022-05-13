import styled from "styled-components";

export default styled.footer`
  background-color: #89ce34;
  margin: auto;
  bottom: 0;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100vw;
  bottom: 0;

  .ml {
    overflow: scroll;
    height: 80vh;
    padding: 1rem;
  }

  .ml p {
    font-size: 1rem;
    line-height: 1.1rem;
  }
  h1 {
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
  .contact {
    text-align: center;
    line-height: 1.5rem;
  }
  h4 {
    text-align: center;
    padding: 1.5rem;
  }
  ul {
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
