import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import "./index.scss";
import {TodoProvider} from './TodoProvider'

// I was a little confused here too! What I mean is, I wasn't sure whether these items were supposed to actually BE a part of the list
// or whether it was just a clever way to both 1) describe the tasks in the challenge and 2) provide an example of the 'shape' of the todo
// objects. Either way, I don't think it matters. I mean, certainly we could include these by just having them be the default list items, but I 
// chose not to do so....

// You will also note the use of the TodoProvider which just looks, IMO, 'cleaner' as opposed to the <TodosContext.Provider /> component...

const todosTemplate = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: false
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: false
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: false
  }
];

export const App = () => {
  return (
    <div className="root">
      <TodoProvider>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodoProvider>
    </div>
  );
};
