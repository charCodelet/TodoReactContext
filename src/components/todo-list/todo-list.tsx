import "./todo-list.scss";
import { useTasks } from '../../TodoProvider'
import { TodoItem } from "../todo-item";


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

// import * as React from "react";
// import { TodoItem } from "../todo-item";
// import { TodosContext, ContextType } from "../../todo-context";
// import "./todo-list.scss";

// export type Todo = {
//   id: number;
//   label: string;
//   checked: boolean;
// };

// export const TodoList = () => {
//   const { todos } = React.useContext<ContextType>(TodosContext);
//   console.log(todos, `--> todos [todo-list]`)
//   return (
//     <div className="todo-list">
//       <span className="todo-list-title">Things to do:</span>
//       {todos.length ? (
//         <div className="todo-list-content">
//           {todos.map((todoItem) => (
//             <TodoItem
//               key={todoItem.id}
//               label={todoItem.label}
//               checked={todoItem.checked}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="no-todos">
//           Looks like you&apos;re absolutely free today!
//         </div>
//       )}
//     </div>
//   );
// };
