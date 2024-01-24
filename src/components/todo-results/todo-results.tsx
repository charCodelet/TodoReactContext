import { useTasks } from '../../TodoProvider'
import "./todo-results.scss";

// I was pretty proud of this one: I opted to use one of the newer methods flatMap as a way to both check whether a box was check and
// at the same time, display the label in the event it was checked. This was a more efficient way and avoided possibly chaining a map
// and a filter...oh and I went ahead and added the inline listStyleType and set it to 'none' to get rid of the ugly bullet points
// associated with <li> tags. 

// Oh yeah...that reminds me while we are on the topic of CSS - one of the coding asks was to make the boxes in a column. You can see I did
// this in the todo-list.scss file by simply adding flexDirection: column. This is on line 19 of that file...

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
