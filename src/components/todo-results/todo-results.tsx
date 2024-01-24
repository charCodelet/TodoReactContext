import { useTasks } from '../../TodoProvider'
import "./todo-results.scss";

export const TodoResults = () => {
  const { todos } = useTasks();
  return (
    <ul className="todo-results">Done:
      {
      todos.flatMap(todo => todo.checked ? <li key={todo.id} style={{listStyleType: "none"}}>{[todo.label]}</li> : [])
      }
    </ul>
  );
};
