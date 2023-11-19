import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";
// import { NavLink } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // width: "70%",
    padding: theme.spacing(2),
    backgroundColor: "grey",
    color: "#fdd60c",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    backgroundColor: "none",
    color: "#fdd60c",
  },
}));

export default function NumberAttemptsDialog({
  open,
  setOpen,
  numberAttempts,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <DialogTitle
          sx={{ m: 0, p: 2, bgcolor: "#09002F", color: "#fff" }}
          id="customized-dialog-title"
        >
          Modal title
        </DialogTitle> */}
        {/* <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent dividers>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h1" fontFamily={"Vipnagorgialla"}>
              {numberAttempts}
            </Typography>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
