import styled from "styled-components";

export default styled.nav`

  background-color: #c2f189;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  .navBar {
 
    color: #fff;

    min-height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navBarSolid {
    color: #fff;
    transition: 0.3s;
  }
  h1 {
    font-size: 2rem;
  }
  .navBarLogo {
    width: 15vw;
    margin: 1rem;
  }
  .navBarBurger {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    color: inherit;
    display: block;
  }

  .navBarItem::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 3vw;
    height: 1px;
    background: #fff;
  }
  .navBarLink {
    display: block;
    padding: 1.5rem;
    font-size: 3vw;
    padding: 0 0.3rem;
    color: inherit;
  }
  .navBarItem:last-child::after {
    display: none;
  }
  .navBarBurger:hover {
    cursor: pointer;
  }
  .burgerBar,
  .burgerBar::before,
  .burgerBar::after {
    display: block;
    width: 40px;
    height: 3px;
    position: relative;
    border-radius: 3px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
  }
  .burgerBar::before,
  .burgerBar::after {
    content: "";
    position: absolute;
    left: 0;
  }
  .burgerBar::before {
    transform: translateY(-12px);
  }
  .burgerBar::after {
    transform: translateY(12px);
  }
  .showNav .burgerBar {
    width: 0;
    background: transparent;
  }
  .showNav .burgerBar::before {
    transform: rotate(45deg);
    background-color: red;
  }
  .showNav .burgerBar::after {
    transform: rotate(-45deg);
    background-color: red;
  }
  .navBarItem {
    transform: translateY(100vh);
  }
  .showNav .navBarItem {
    transform: translateY(0);
  }
  .showNav .slideInDown1 {
    transition: all 1s ease-out;
  }
  .showNav .slideInDown2 {
    transition: all 1.1s ease-out;
  }
  @media screen and (min-width: 620px) {
    .navBarLogo {
      width: 5rem;
    }
  }
`;
