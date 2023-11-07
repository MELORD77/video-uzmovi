import { Box } from "@mui/material";
import React from "react";
import imageBg from "../../images/footerBox.png";
import person from "../../images/imagePerson.png";
export default function GiftFooter() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "160px",
          backgroundImage: `url(${imageBg})`,
          backgroundSize: "100%",
          display: { xs: "flex", md: "flex" },
          px: 2,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "270px", md: "500px" } }}>
          <h1 className="footer-text">Выберите 3 произвольные карты</h1>
        </Box>

        <Box sx={{ pb: 5 }}>
          {" "}
          <img src={person} alt="person" className="person" />
        </Box>
      </Box>
    </>
  );
}
