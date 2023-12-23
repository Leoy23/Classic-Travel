"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuIcon from "@mui/icons-material/Menu";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "100%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
};
export interface ModalProps {
  title: string;
  extraContent: React.ReactNode;
}

export default function BasicModal({ title, extraContent }: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center text-white">
      <Button onClick={handleOpen}>
        <MenuIcon className="text-white" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        className="w-1/2"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center uppercase italic"
          >
            {title}
          </Typography>
          {extraContent}
        </Box>
      </Modal>
    </div>
  );
}
