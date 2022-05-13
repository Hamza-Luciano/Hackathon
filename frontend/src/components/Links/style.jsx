import styled from "styled-components";

export default styled.section`
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
    border-radius: 4vw;
    overflow: hidden;
  }

  button:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  .but {
    width: 15vw;
    height: 15vw;
    border: none;
    box-shadow: 5px 3px 10px 1px #a4a1a1;
    cursor: pointer;
  }
  div.buttondiv {
    display: flex;
    justify-content: space-between;
    margin-top: 4 rem;
    padding: 5vw;
  }
  hr {
    margin: 2rem auto;
    border: solid #171815 1px;
    width: 40vw;
    justify-self: center;
  }

  @media screen and (max-width: 620px) {
    button {
      background-image: linear-gradient(
        to right,
        #35a339 0%,
        #c2f189 51%,
        #56ab2f 100%
      );

      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 20px #eee;
      border-radius: 4vw;
    }

    button:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
    .but {
      width: 20vw;
      height: 20vw;
      border: none;
      box-shadow: 10vw;
    }
    div.buttondiv {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 50vw;
      margin: auto;
      padding: 20vw;
    }

    .buttondiv {
      display: flex;
      flex-shrink: 3;
    }
    button.but {
      margin-bottom: 2rem;
    }
  }
`;
