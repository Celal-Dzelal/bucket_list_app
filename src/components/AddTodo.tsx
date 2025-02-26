import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const AddTodo = () => {
  const [task, setTask] = useState(""); //* This state is used to store the value entered by the user in the TextField component. When the user types, the handleChange function updates the state using setTask.

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask(e.target.value);
  }; //* It updates the task state to store user's input.

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
  }; //* The value typed in TextField is stored in the task state via handleChange

  return (
    <Paper>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField onChange={handleChange} />
        <Button type="submit">Save</Button>
      </Box>
    </Paper>
  );
};

export default AddTodo;
