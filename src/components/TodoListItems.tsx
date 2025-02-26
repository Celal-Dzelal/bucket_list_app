import { IconButton, ListItem, ListItemText } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

interface ITodoListItems {
  todo: ITodo;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoListItems: React.FC<ITodoListItems> = ({
  todo,
  toggleTodo,
  deleteTodo,
}: ITodoListItems) => {
  return (
    <ListItem
      sx={{
        marginTop: "0.3rem",
        padding: "1rem",
        cursor: "pointer",
        backgroundColor: todo.isDone ? "#B6BFBE" : "#F2F2F2",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-in-out",
        alignItems: "flex-start",
        "&:hover": {
          backgroundColor: todo.isDone ? "#F2F2F2" : "#B6BFBE",
          transform: "scale(1.02)",
        },
      }}
      secondaryAction={
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <DeleteOutline
            sx={{
              color: "#1A1A26",
              fontSize: "1.5rem",
              "&:hover": { color: "white" },
            }}
          />
        </IconButton>
      }
    >
      <ListItemText
        primary={todo.task}
        onClick={() => toggleTodo(todo)}
        sx={{
          textDecoration: todo.isDone ? "line-through" : "none",
          color: todo.isDone ? "#F29F05" : "#315a8f",
          fontWeight: "bold",
          pr: "3rem",
          wordBreak: "break-word",
        }}
      />
    </ListItem>
  );
};

export default TodoListItems;
