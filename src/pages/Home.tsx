import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
