import styled from "styled-components";

export default styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: red;
  margin: auto;
  /* ici */

  border-top: 0.2rem solid black;
  position: fixed;
  width: 100%;
  bottom: 0;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;

  .ml {
    font-size: 0.6rem;
  }
  h1,
  h4 {
    text-align: center;
  }
`;

// surligner les mots quand on passe dedans
