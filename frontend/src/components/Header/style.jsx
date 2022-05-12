import styled from "styled-components";

export default styled.header`
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .headerTxt {
    background-color: rgba(0, 0, 0, 0.69);
    width: 80vw;
    height: auto;
    border-radius: 1rem;
  }
  .headerTxt > h2,
  p {
    color: white;
    padding: 1rem;
  }
  @media screen and (min-width: 620px) {
    width: 100vw;
    height: 100vh;
    justify-content: flex-start;

    .headerTxt {
      margin-left: 10vw;
      width: 40vw;
      height: auto;
      background-color: rgba(0, 0, 0, 0.532);
    }
  }
`;
