/* eslint-disable array-callback-return */
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import { Box } from "@mui/material";

function App() {
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [people, setPeople] = useState(undefined);

  const getAllPeople = () => {
    axios
      .get("https://adidoesnt-otot-b.herokuapp.com/")
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    getAllPeople()
  }, []);

  const addOnePerson = () => {
    axios
      .post("https://adidoesnt-otot-b.herokuapp.com/", {
        name: name,
        age: age,
      })
      .then((res) => {
        getAllPeople();
      })
      .catch((err) => err);
  };

  const updateOnePerson = () => {
    axios
      .put(`https://adidoesnt-otot-b.herokuapp.com/${_id}`, {
        name,
        age,
      })
      .then((res) => {
        getAllPeople();
      })
      .catch((err) => err);
  };

  const deleteOnePerson = () => {
    axios
      .delete(`https://adidoesnt-otot-b.herokuapp.com/${_id}`)
      .then((res) => {
        getAllPeople();
      })
      .catch((err) => err);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={'100vh'}
      style={{ background: "linear-gradient(90deg, #AC44B0, #EF429A)" }}
      alignItems={'center'}
      overflow={'auto'}
    >
      <Form
        inputs={[
          {
            label: "Get all people",
            id: false,
            name: false,
            age: false,
            onSubmit: getAllPeople,
          },
          {
            label: "Add one person",
            id: false,
            name: true,
            age: true,
            onSubmit: addOnePerson,
          },
          {
            label: "Update one person",
            id: true,
            name: true,
            age: true,
            onSubmit: updateOnePerson,
          },
          {
            label: "Delete one person",
            id: true,
            name: false,
            age: false,
            onSubmit: deleteOnePerson,
          },
        ]}
        idOnChange={(event) => {
          setId(event.target.value);
        }}
        nameOnChange={(event) => {
          setName(event.target.value);
        }}
        ageOnChange={(event) => {
          setAge(event.target.value);
        }}
      ></Form>
      {people && people.map((person, index) => (
        <Card key={index} name={person.name} age={person.age} id={person._id} />
      ))}
    </Box>
  );
}

export default App;
