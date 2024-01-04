import "./DeleteTodo.scss"



type DeleteTodoProps = {
    onDeleteTodo: () => void
}


const DeleteTodo = ({onDeleteTodo} : DeleteTodoProps) => {

    return (
        <button onClick={onDeleteTodo}>🗑️</button>
    )

}

export default DeleteTodo
