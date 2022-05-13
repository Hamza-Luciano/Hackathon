import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  .card {
    position: relative;
    width: 30rem;
    border: solid black 1px;
    border-radius: 6px;
  }
  h1 {
    margin: 1rem;
    font-size: 2rem;
  }
  .block {
    display: flex;
    border: solid black 1px;
    margin: 2rem;
    background-color: #b0e867;
  }
  .cool {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 1rem 3em;
  }
  .good {
    font-size: 4rem;
    padding: 1rem 0 2rem 1rem;
  }
  .face {
    background-color: #a8e05f;
    width: 20%;
  }

  .weather {
    font-size: 3rem;
    text-align: center;
  }
  .imeteo {
    width: 40%;
  }
  .humidite {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgcard {
    width: 20%;
  }
  .num {
    font-size: 3rem;
  }
  .btn {
    background-color: transparent;
    position: absolute;
    top: 4%;
    right: 6%;
    border: none;
  }

  .favorite {
    width: 2rem;
    color: aliceblue;
  }
`;
