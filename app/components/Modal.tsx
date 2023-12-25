"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { icons } from "@/lib/utils";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "100%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
};
export interface ModalProps {
  icon?: string;
  title: string;
  extraContent: React.ReactNode;
}

export default function BasicModal({ icon, title, extraContent }: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleOpen}
        className={`${
          !icons[icon as keyof typeof icons] &&
          "text-white outline-2 md:text-lg"
        }`}
      >
        {icons[icon as keyof typeof icons]
          ? icons[icon as keyof typeof icons]
          : icon}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        className="w-1/2"
      >
        <Box sx={style} className="rounded-lg w-[325px] sm:w-full">
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
