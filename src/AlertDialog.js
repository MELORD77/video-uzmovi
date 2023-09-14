import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ResponsiveDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          sx={{
            width: "300px",
            height: "200px",
            backgroundColor: { lg: " rgba( 10,35,98, 0.5)" },
            backdropFilter: { lg: " blur(2px)" },
            borderRadius: { lg: "10px" },
            border: { lg: " 1px solid rgba( 10,35,98, )" },
          }}
        >
          <DialogTitle>{"Title?"}</DialogTitle>
        </Box>
      </Dialog>
    </div>
  );
}
