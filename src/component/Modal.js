import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";

function ModalExample() {
  const handleCancel = () => {
    alert("cancel")
  };
  const handleLogin = () => {
    alert("re login")
  };

  return (
    <div>
      <Dialog open
      onClose={ handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Session is expired please re login
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleLogin}> Re-login</Button>
          <Button onClick={handleCancel}> Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalExample;
