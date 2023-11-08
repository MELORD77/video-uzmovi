import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
export default function ContentTools() {
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
            <InfoIcon sx={{ color: "#f2f2f2", ml: 0 }} />
            <Typography className="navbar-button1">Правила игры</Typography>
          </button>
        </Box>
      </Box>
    </>
  );
}
