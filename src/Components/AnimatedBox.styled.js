import styled from "styled-components";

const AnimatedBox = styled.div`
  padding: 0px 0px;
  display: flex;
  width: 100%;
  height: 220px;
  justify-content: end;
  position: absolute;
  // display: none;
  left: 0;
  bottom: 5%;

  // @media screen and (max-width: 768px) {
  //   width: 60%;
  //   height: 150px;
  //   position: absolute;
  //   display: flex;
  //   left: 30%;
  //   top: 80%;
  //   border: 1px solid red;
  //   transform: translate(-50%, -50%);
  // }
  // @media (min-width: 768px) {
  //   width: 60%;
  //   height: 150px;
  //   position: absolute;
  //   display: flex;
  //   justify-content: end;
  //   left: 60%;
  //   top: 80%;
  //   border: 1px solid yellow;
  //   transform: translate(-50%, -50%);
  // }
  //   @media  (min-width: 1200px) {
  //     width: 170px;
  //     position: absolute;
  //     left: 65%;
  //     top: 75%;
  //     transform: translate(-50%, -50%);
  //   }
  //   @media  (max-width: 1500px) {
  //     width: 170px;
  //     position: absolute;
  //     left: 62%;
  //     top: 78%;
  //     transform: translate(-50%, -50%);
  //   }
  //
`;
const ImageBox = styled.div`
  padding: 0px 0px;
  width: 150px;
  height: 100%;
  background-image: url("../images/logo1.jpg");
  // background-size: 100% 100%;
`;

export { AnimatedBox, ImageBox };
