import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Table from "./components/Mtable.js";
// import handlePostData from "./components/Mtable";

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [editValue, setEditValue] = useState([]);
  //   const handleOpen = () => setOpen(true);
  const handleOpenDelete = () => setOpenDelete(true);
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //   for data when rendered

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  console.log(user);

  // funciton logic to fetch and handle data

  function handleOpen(e) {
    const id = e.target.dataset.id;

    data.filter((item) => {
      if (parseInt(item.id) === parseInt(id)) {
        setEditValue(item);
      }
    });

    // console.log(id, editValue);
    setOpen(true);
    // console.log(e.target.name);
    // console.log(e.target.attributes['data-tid'].value);  // avy
  }

  console.log(editValue);
  const handleClose = () => setOpen(false);

  const fetchData = () => {
    fetch(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    )
      .then((response) => response.json())
      .then((user) => setData(user));
  };

  const handlePostData = (e) => {
    e.preventDefault();
    fetch(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",
      {
        method: "POST",
        body: JSON.stringify({
          id: data.length + 1,
          name: user.name,
          username: user.username,
          email: user.email,
          city: user.city,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((newUser) => data.push(newUser));
  };

  //for update
  const handleUpdateData = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    fetch(
      `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: data.length + 1,
          name: user.name,
          username: user.username,
          email: user.email,
          city: user.city,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((updateuser) => [...data, updateuser]);
  };

  // for delete
  const handleDeleteData = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    fetch(
      `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`,
      {
        method: "DELETE",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((updateuser) => [...data, updateuser]);
  };

  //   for data when changed
  // useEffect(() => {
  //   handlePostData();
  // }, []);

  return (
    <div className="App">
      <h2>Dashboard</h2>
      <AddForm
        handlePostData={handlePostData}
        handleChange={handleChange}
        user={user}
      />
      <Table
        open={open}
        data={data}
        openDelete={openDelete}
        handleOpen={handleOpen}
        onClose={handleClose}
        // setData={setData}
        editValue={editValue}
        // setOpen={setOpen}
        // setEditValue={setEditValue}
        handleOpenDelete={handleOpenDelete}
        handleUpdateData={handleUpdateData}
        handleDeleteData={handleDeleteData}
      />
    </div>
  );
};

export default App;
