import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, updateIsCompleted } from "../store";

export default function TodoItem({
  index,
  title,
  body,
  isCompleted,
  showButtons,
}) {
  const dispatch = useDispatch();

  return (
    <Card
      className="mx-1 mb-5"
      style={{ width: "15rem", background: "lightgrey" }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <hr />
        <Form.Check
          inline
          label="Completed"
          name="group1"
          type={"checkbox"}
          id={`inline-${"checkbox"}-1`}
          checked={isCompleted}
          onChange={() => dispatch(updateIsCompleted(index))}
        />
        <hr />
        {showButtons && (
          <>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteTodo(index))}
            >
              Delete
            </Button>{" "}
            <Link to={`/todo-item/${index}`}>
              <Button variant="primary">View</Button>
            </Link>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
