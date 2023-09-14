import styled from "styled-components";

const AnimatedBox = styled.div`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  width: 400px;
  height::600px;
  position: absolute;
  left: 55%;
  top: 70%;
  transform: translate(-0%, -50%);

  @media only screen and (max-width: 768px) {
    width: 150px;
    height::400px;
    position: absolute;
    left: 15%;
    top: 80%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    position: absolute;
    left: 65%;
    top: 80%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (min-width: 1200px) {
    width: 170px;
    position: absolute;
    left: 65%;
    top: 75%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (min-width: 1500px) {
    width: 170px;
    position: absolute;
    left: 62%;
    top: 78%;
    transform: translate(-50%, -50%);
  }
`;
export { AnimatedBox };
