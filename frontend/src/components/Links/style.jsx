import styled from "styled-components";

export default styled.section`
  @media screen and (min-width: 620px) {
    button {
      background-image: linear-gradient(
        to right,
        #5dc42e 0%,
        #c2f189 51%,
        #56ab2f 100%
      );

      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
    }

    button:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
    .but {
      width: 20vw;
      height: 10vw;
      text-align: center;
    }
  }
`;
