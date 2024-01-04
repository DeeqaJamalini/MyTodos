import "./ToDoList.scss";
import { useState } from "react";

import AddTodo from "../AddTodo/AddTodo";
import CompleteTodo from "../CompleteTodo/CompleteTodo";
import ResetTodo from "../ResetTodo/ResetTodo";
import { v4 as uuidv4 } from "uuid";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const completeTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const resetTodo = () => {
    setTodos([]);
  };

  return (
    <div className="todolist">
      <div className="todolist__header">
        <h1 className="todolist__header--title">My Todos</h1>
        <div className="todolist__header--reset">
          <ResetTodo onReset={() => resetTodo()} />
        </div>
      </div>
      <div className="todolist__list">
        <AddTodo onAddTodo={addTodo} />

        {todos.length === 0 && (
          <div className="todolist__list--placeholder">
            Nothing to see here yet... Add a task in the field above! ☝️
          </div>
        )}

        {todos.map((todo) => (
          <div className="todolist__list--items" key={todo.id}>
            <CompleteTodo onCompleteTodo={() => completeTodo(todo.id)} />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}>
              {todo.text}
            </span>

            <DeleteTodo onDeleteTodo={() => deleteTodo(todo.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
