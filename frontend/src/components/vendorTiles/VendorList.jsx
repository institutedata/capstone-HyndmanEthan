import { useState } from "react";
import Divider from "@mui/material/Divider";
import { Card, Typography, Box } from "@mui/material";
import SubscribeButton from "../buttons/SubscribeButton";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

// TODO: change modal to display one tile for each vendor

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",

};

const VendorList = ({ title, initialSubscribed }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isSubscribed, setIsSubscribed] = useState(initialSubscribed);

  const handleToggleSubscribe = (newSubscribed) => {
    setIsSubscribed(newSubscribed); // Update subscribed state in parent component
  };
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Card style={{ width: "100%", height: "100%" }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  style={{ marginTop: "12px", marginLeft: "12px" }}
                >
                  {title}
                </Typography>
                <div>
                  <SubscribeButton
                    isSubscribed={isSubscribed}
                    onToggle={handleToggleSubscribe}
                  />
                </div>
              </Box>
            </Card>
          </Box>
        </Fade>
      </Modal>
      <Divider />
    </>
  );
};

export default VendorList;
