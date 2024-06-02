import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  return tasks.map((task, index) => (
    <TodoItem
      key={index}
      index={index}
      title={task.title}
      body={task.body}
      isCompleted={task.isCompleted}
      showButtons={true}
    />
  ));
}
