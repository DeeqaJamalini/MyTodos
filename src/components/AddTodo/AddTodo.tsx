import "./AddTodo.scss";
import { useState } from "react";

type AddTodoProps = {
  onAddTodo: (todo: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    } else {
      alert("Please enter a todo");
    }
  };

  return (
    <div className="addTodo">
      <input
        className="addTodo__input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add your task here..."
      />
      <button className="addTodo__button" onClick={handleAddTodo}>
        🞦
      </button>
    </div>
  );
};

export default AddTodo;
