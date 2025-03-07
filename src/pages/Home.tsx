import axios from "axios";
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";

const Home = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  interface ITodo {
    id: string;
    isDone: boolean;
    task: string;
  }

  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodo = async () => {
    const { data } = await axios(apiUrl);
    console.log(data);
    setTodos(data);
  };

  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(apiUrl, { task, isDone: false });
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${apiUrl}/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone,
      });
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
