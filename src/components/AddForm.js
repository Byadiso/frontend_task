import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <div>
      <Button onClick={handleOpen}>Add New user</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={classes.root}>
            <label>
              Name:
              <input type="text" name="name" onChange={props.handleChange} />
            </label>
            <label>
              username:
              <input type="text" name="name" onChange={props.handleChange} />
            </label>
            <label>
              Email:
              <input type="text" name="email" onChange={props.handleChange} />
            </label>
            <label>
              City:
              <input type="text" name="city" onChange={props.handleChange} />
            </label>
            <div className="buttonAdd">
              <Button variant="contained">Cancel</Button>
              <Button
                onClick={props.handlePostData}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
