import styled from "styled-components";

const LogoText = styled.p`
display:flex
  text-transform: uppercase;
  font-family: verdana;
  font-size: 1.5em;
  font-weight: 700;
  color: #fefaba;
  text-shadow: 1px 1px 1px #000, 1px 2px 1px #000, 1px 3px 1px #000,
    1px 4px 1px #000, 1px 5px 1px #000, 1px 6px 1px #000, 1px 7px 1px #000,
    1px 8px 1px #000, 1px 9px 1px #000, 1px 10px 1px #fefaba,
    1px 18px 6px rgba(250,250,250, 0.4), 1px 22px 10px rgba(250,250,250, 0.2),
    1px 25px 35px rgba(250,250,250, 0.2), 1px 30px 60px rgba(250,250,250, 0.4);
    @media (max-width: 576px) {
      position:absolute;
      top:0;
      left:50%;
      transform: translate(-50%, -50%);    
    }
`;
export default LogoText;