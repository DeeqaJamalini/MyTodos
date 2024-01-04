import "./ToDoList.scss"
import { useState } from "react"

import AddTodo from "../AddTodo/AddTodo" 
import CompleteTodo from "../CompleteTodo/CompleteTodo"
//import DeleteTodo from "../DeleteTodo/DeleteTodo"
//import ResetTodo from "../ResetTodo/ResetTodo"
import { v4 as uuidv4 } from 'uuid';



type Todo = {
    id:  string ;
    text: string;
    completed: boolean;
}


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
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };



  return (
    <div>
      <AddTodo onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <CompleteTodo  onCompleteTodo={() => completeTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            
          </div>
        ))}
      </ul>
      
    </div>
  );





}


export default TodoList;