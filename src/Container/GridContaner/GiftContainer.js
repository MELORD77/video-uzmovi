import React from "react";
import { Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import ResponsiveAppBar from "../Navbar";
import "./style.css";

export default function GiftContainer() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid container className="grid-container">
        <Grid item xs={12} md={8} className="grid-item">
          <ResponsiveGrid />
        </Grid>
      </Grid>
    </div>
  );
}
