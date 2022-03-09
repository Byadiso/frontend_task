import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Modal,
  TextField,
  Button,
} from "@mui/material/";

import { styled } from "@mui/material/styles";

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
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

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

const Mtable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="classes.table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((user) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address.city}</TableCell>
              <TableCell>
                <Button onClick={props.handleOpen} data-id={user.id}>
                  Edit
                </Button>
                <Modal
                  open={props.open}
                  onClose={props.handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <form className={classes.root}>
                      <TextField
                        label="name"
                        variant="filled"
                        value={props.editValue.name}
                        required
                      />
                      <TextField
                        label="Email"
                        variant="filled"
                        type="email"
                        value={props.editValue.email}
                        required
                      />

                      <div className="buttonAdd">
                        <Button variant="contained">Cancel</Button>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          onClick={props.handleUpdateData}
                        >
                          Update
                        </Button>
                      </div>
                    </form>
                  </Box>
                </Modal>
              </TableCell>
              <TableCell>
                <Button onClick={props.handleOpenDelete} data-id={user.id}>
                  Delete
                </Button>

                {/* handle delete  with modal delete*/}
                <Modal
                  open={props.openDelete}
                  onClose={props.handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <form className={classes.root}>
                      Are sure you want to delete this user?
                      <div className="buttonAdd">
                        <Button variant="contained">Cancel</Button>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          onClick={props.handleUpdateData}
                        >
                          Delete
                        </Button>
                      </div>
                    </form>
                  </Box>
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Mtable;
