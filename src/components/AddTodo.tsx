import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

interface IAddTodo {
  addTodo: AddFn;
}

const AddTodo: React.FC<IAddTodo> = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <Paper>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
          padding: "0 10px",
        }}
      >
        <TextField onChange={handleChange} fullWidth />
        <Button
          type="submit"
          sx={{
            border: "2px solid #66A4E1",
            backgroundColor: "#242424",
            color: "white",
          }}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default AddTodo;
