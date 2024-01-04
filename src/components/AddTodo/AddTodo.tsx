import "./AddTodo.scss"
import {useState} from 'react'

type AddTodoProps = {
    onAddTodo: (todo: string) => void;
}



 const AddTodo = ({onAddTodo} : AddTodoProps ) => {

const [newTodo, setNewTodo] = useState<string>("");

const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
        onAddTodo(newTodo);
        setNewTodo('');
    }
}

    return (
        <div>
            <input
            type= "text"
            value= {newTodo}
            onChange ={(e) => setNewTodo(e.target.value)}
            
            />
            <button onClick={handleAddTodo}>+</button>
            
            

        </div>

    );

};

export default AddTodo;


