import "./ResetTodo.scss";

type ResetTodoProps = {
  onReset: () => void;
};

const ResetTodo = ({ onReset }: ResetTodoProps) => {
  return (
    <button className="resetbutton" onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetTodo;
