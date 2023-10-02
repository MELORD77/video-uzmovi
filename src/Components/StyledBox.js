import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  border-top-style: groove;
  border-radius: 3px 3px;
  width: 65%;

  @media screen and (max-width: 576px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: 75%;
  }
  @media (min-width: 992px) {
    // width: 65%;
  }

  height: 20px;

  @media (max-width: 576px) {
    border-left: 4px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
    border-top: 4px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
    border-right: 4px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
    box-shadow: ${({ clicked }) =>
      clicked === "true"
        ? "-2px -1px 0px 1px rgba(128, 128, 128, 0.3), -2px -1px 0px 0.8px rgba(255, 255, 255, 0.5), -2px 1px 1px 0.5px rgba(128, 128, 128, 01) inset, -3px 1px 1px 0px rgba(255, 255, 255, 0.8) inset;"
        : "-2px -2px 0px 0.5px rgba(179, 0, 0, 0.3), -2px -1px 0px 0.5px rgba(250, 0, 0, 0.5), -2px 1px 1px 0.5px rgba(179, 0, 0, 0.3) inset, -2px 1px 1px 0px rgba(250, 0, 0, 0.8) inset;"};

    height: 10px;
  }
  @media (min-width: 768px) {
    height: 15px;
    border-left: 6px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
    border-top: 6px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
    border-right: px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
  }
  @media (min-width: 1200px) {
    height: 20px;
    border-left: 9px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
    border-top: 9px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
    border-right: 9px solid
      ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
  }

  border-left: 9px solid
    ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
  border-top: 9px solid
    ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
  border-right: 9px solid
    ${({ clicked }) => (clicked === "true" ? "#fff" : "#eb0537")};
`;
export default StyledBox;

// box-shadow: ${({ clicked }) =>
//   clicked === "true"
//     ? "-3px -3px 0px 1px rgba(128, 128, 128, 0.3), -3px -3px 1px 2.8px rgba(255, 255, 255, 0.8), -2px 1px 1px 0.5px rgba(128, 128, 128, 0.3) inset, -4px 1px 1px 0px rgba(255, 255, 255, 0.8) inset;"
//     : "-3px -3px 0px 1px rgba(179, 0, 0, 0.9), -3px -3px 0px 2.8px rgba(250, 0, 0, 0.8), -2px 1px 1px 0.5px rgba(179, 0, 0, 0.3) inset, -4px 1px 1px 0px rgba(250, 0, 0, 0.8) inset;"};

///main
// box-shadow: ${({ clicked }) =>
//   clicked === "true"
//     ? "-2px -2px 0px 1px rgba(128, 128, 128, 0.3), -3px -2px 5px 2px rgba(255, 255, 255, 0.8), -2px 1px 1px 0.5px rgba(128, 128, 128, 0.3) inset, -4px 1px 1px 0px rgba(255, 255, 255, 0.8) inset;"
//     : "-2px -2px 0px 0.5px rgba(128, 128, 128, 0.3), -2px -2px 1px 1px rgba(255, 255, 255, 0.8), -2px 1px 1px 0.5px rgba(128, 128, 128, 0.3) inset, -3px 1px 1px 0px rgba(255, 255, 255, 0.8) inset;"};
