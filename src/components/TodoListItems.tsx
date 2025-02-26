import { IconButton, ListItem, ListItemText } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

interface ITodoListItems {
  todo: ITodo;
}

const TodoListItems = ({ todo }: ITodoListItems) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton>
          <DeleteOutline
            sx={{
              color: "#d32f2f",
              fontSize: "1.5rem",
              "&:hover": { color: "red" },
            }}
          />
        </IconButton>
      }
    >
      <ListItemText primary={todo.task} />
    </ListItem>
  );
};

export default TodoListItems;
