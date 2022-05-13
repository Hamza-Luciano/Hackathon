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
  .titre{
    font-size: 4rem;
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
  .don {
    border: solid black 1px;
    padding: 2rem;
  }
.don {
	box-shadow: 2px 0px 0px 2px #cc0202;
	background-color:#cc0202;
	border-radius:10px;
	border:1px solid #cc0202;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:12px 37px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc0202;
}.don:hover {
	
}
.don:active {
	position:relative;
	top:1px;
}
  }

  .don:hover {
    background-position: right center; /* change the direction of the change here */
    color: #7e0b0b;
    text-decoration: none;
  }
  .title {
    font-size: 1.5rem;
  }
  img {
    width: 90vw;

    margin-bottom: 2rem;
  }
  .logo {
    display: block;
    margin: 0 px auto;
    width: auto;
  }
  .logo2 {
    width: 24rem;
  }
  h3 {
    margin: 2rem auto;
  }
  p {
    text-align: justify;
  }

  @media screen and (min-width: 600px) {
    max-width: 60vw;
    margin: 0 20rem;
    img {
      width: 55vw;
    }
    h1 {
      text-transform: none;
      letter-spacing: 0;
      font-size: 2em;
      margin: 2rem 0;
    }
  } ;
`;
