import "./todo-list.scss";
import { useTasks } from '../../TodoProvider'
import { TodoItem } from "../todo-item";

// no real changes here. your basic mapping into the TodoItem component

export const TodoList = () => {
  const { todos } = useTasks();
  return (
    <div className="todo-list">
    <span className="todo-list-title">Things to do:</span>
    {todos.length ? (
      <div className="todo-list-content">
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            label={todoItem.label}
            checked={todoItem.checked}
          />
        ))}
      </div>
    ) : (
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    )}
  </div>
  )
}

