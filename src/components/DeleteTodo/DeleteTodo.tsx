import "./DeleteTodo.scss";

type DeleteTodoProps = {
  onDeleteTodo: () => void;
};

const DeleteTodo = ({ onDeleteTodo }: DeleteTodoProps) => {
  return (
    <button className="deleteButton" onClick={onDeleteTodo}>
      🗑️
    </button>
  );
};

export default DeleteTodo;
