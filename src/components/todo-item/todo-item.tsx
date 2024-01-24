import { useTasks } from '../../TodoProvider'
import { FaTrashAlt } from "react-icons/fa";
import "./todo-item.scss";

export const TodoItem = ({ id, label, checked }) => {
  const { updateTodo, deleteTodo } = useTasks();
  const checkTask = (e: React.FormEvent<HTMLInputElement>) => {
    updateTodo(id, e.currentTarget.checked)
  }

  return (
    <div className="todo-item">
    <div
      tabIndex={0}
      role="checkbox"
      aria-checked
      className="todo-item-content"
      // onClick={onClick}
      // onKeyUp={onKeyUp}
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={checked}
        onChange={checkTask}
      />
      <span className={checked ? "todo-item-checked" : ""}>{label}</span>
    </div>
    <FaTrashAlt onClick={() => deleteTodo(id)}/>
  </div>
  )
}


