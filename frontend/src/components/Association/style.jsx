import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  h1,
  h2 {
    font-style: normal;
    font-weight: 600;
    margin: 2rem auto;
  }
  h1 {
    text-transform: none;
    letter-spacing: 0;
    font-size: 2em;
  }
  p {
    font-size: 0.9375em;
    line-height: 1.5rem;
    padding-bottom: 2rem;
  }
  a,
  a:active {
    margin-bottom: 4rem;
    text-decoration: underline;
    color: black;
  }
  img {
    width: 90vw;
    margin-bottom: 2rem;
  }
  .logo {
    width: 30%;
    padding-right: 1rem;
  }
  h3 {
    margin: 2rem auto;
  }

  @media screen and (min-width: 600px) {
    max-width: 60vw;
    margin: 0 20rem;
    img {
      width: 55vw;
    }
  } ;
`;
