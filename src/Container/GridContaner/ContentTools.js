import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import coinIcon from "../../images/icons8-coin-48.png";
import CountUp from "react-countup";
export default function ContentTools({ totalCount }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          px: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <button className="tools-button1">
            <CloseIcon sx={{ color: "#f2f2f2", ml: 0 }} />
            <Typography className="navbar-button1">Завершить игру</Typography>
          </button>
        </Box>
        <Box>
          <h1 className="toolsText">Новая игра</h1>
        </Box>
        <Box>
          {" "}
          <button className="tools-button1">
            {/* <InfoIcon sx={{ color: "#f2f2f2", ml: 0 }} /> */}
            <img src={coinIcon} alt="coin" width={25} />

            <Typography className="navbar-button1">
              {/* Total: */}
              <CountUp start={totalCount} duration={3} />
              {/* Правила игры */}
            </Typography>
          </button>
        </Box>
      </Box>
    </>
  );
}
