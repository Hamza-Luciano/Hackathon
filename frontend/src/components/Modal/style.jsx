import styled from "styled-components";

export default styled.div`
  body.active-modal {
    overflow-y: hidden;
  }
  .btn-modal {
    border: none;
    background: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }
  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    /* vrai valeur min-width: 300px; */
    min-width: 355px;
    color: black;
  }
  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: var(--color-button);
  }
  .close {
    background-color: var(--color-button);
    display: flex;
    justify-content: center;
    border-radius: 7px;
    color: white;
    padding: 5px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
  }

  .close:hover {
    background-color: var(--color-button);
  }
  main .team {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
  main h2 {
    display: flex;
    justify-content: center;
  }

  .modal-button {
    display: flex;
    justify-content: center;
  }
`;
