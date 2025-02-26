import { Grid, Typography } from "@mui/material";
import TodoListItems from "./TodoListItems";

interface ITodoList {
  todos: ITodo[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  const inProgress = todos.filter((todo) => todo.isDone === false);
  const completed = todos.filter((todo) => todo.isDone === true);
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
        mt: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        sx={{
          margin: "1rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid #315a8f",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          p: 2,
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Typography color="#315a8f" align="center" variant="h5" sx={{ mb: 1 }}>
          Pending Goals
        </Typography>
        {inProgress.length ? (
          inProgress.map((todo) => (
            <TodoListItems
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography>No Goal</Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        sx={{
          margin: "1rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid #F29F05",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          p: 2,
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Typography color="#F29F05" align="center" variant="h5" sx={{ mb: 1 }}>
          Achieved Goals
        </Typography>
        {completed.length ? (
          completed.map((todo) => (
            <TodoListItems
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))
        ) : (
          <Typography>No Goal</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
