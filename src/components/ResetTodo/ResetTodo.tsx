import "./ResetTodo.scss"


type ResetTodoProps = {
    onReset: () => void
}


const ResetTodo = ({onReset}: ResetTodoProps) => {

    return (
        <button onClick={onReset}>Reset</button>
    )

}

export default ResetTodo