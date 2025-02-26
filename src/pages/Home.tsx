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

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
