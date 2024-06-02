import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import TodoItem from "./TodoItem";

export default function TodoPage() {
  const todos = useSelector((state) => state.todo.value);
  const { id } = useParams();

  const todo = todos.find((item, index) => index === +id);

  if (!todo) {
    return <Navigate to={"/404"} />;
  }

  return (
    <TodoItem
      index={id}
      title={todo.title}
      body={todo.body}
      isCompleted={todo.isCompleted}
      showButtons={false}
    />
  );
}
