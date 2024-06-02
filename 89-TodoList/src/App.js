import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.value);

  return (
    <div className="App container">
      <h1 className="mt-lg-5 text-center">TODO LIST</h1>
      <div className="d-flex flex-row flex-wrap">
        <TodoForm />
        <TodoList tasks={todos} />
      </div>
    </div>
  );
}

export default App;
