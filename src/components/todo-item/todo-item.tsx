import { useTasks } from '../../TodoProvider'
import { FaTrashAlt } from "react-icons/fa";
import "./todo-item.scss";

// A few things here: first, you can see the usage of the useTasks hook to reference the updateTodo and deleteTodo methods.
// I have also used the checkTask method with the onChange event handler to run the updateTodo. I tried to demonstrate more
// typescript prowess as well vis a vis the React.FormEvent<HTMLInputElement> syntax. And for what it's worth, there was
// a bit of an issue using e.target.checked: when you use a checkbox, the TS compiler has a problem recognizing the checked property. 
// In order to fix this, it was necessary to use the currentTarget property. 

// I was a bit confused honestly about the inclusion of the onClick and onKeyUp event handlers. As you can see, I did not use them, but 
// I am guessing their purpose might have been made clear if I could have seen the finished version a bit more. At any rate, I didn't
// seem to need them anyway.

// What else...oh yeah, here you can see where I have jettisoned the button in favor of the trash can icon. You will also notice I used the 
// anonymous function in the delete event handler so as to have a way of passing in the id. I could have also used a .bind there...

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


