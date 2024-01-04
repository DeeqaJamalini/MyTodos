import "./CompleteTodo.scss"
import {useState} from 'react'

type CompleteTodoProps = {
    onCompleteTodo: () => void;
   
}


const CompleteTodo = ({onCompleteTodo}: CompleteTodoProps) => {

    const[completed, setCompleted] = useState(false)

    
  const handleCompleteChange = () => {
    setCompleted(!completed);
    onCompleteTodo();
  };


    return (
        <input type="checkbox" checked={completed} onChange={handleCompleteChange} />
    )

}


export default CompleteTodo