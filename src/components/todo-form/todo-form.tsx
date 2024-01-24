import { useState } from 'react'
import "./todo-form.scss";
import { useTasks } from '../../TodoProvider'


// not much here either. Note the usage of setTask to an empty string to clear out the input field. And the addTodo is 
// obtained via the useTasks hook which references the Provider context...

export const TodoForm = () => {
  
  const [task, setTask] = useState('');
  const { addTodo } = useTasks();

  const submit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(task)
    setTask('');
  }

  return (
   
    <form className="todo-form" onSubmit={submit}>
      <input type="text" value={task} placeholder="Anything to do today?" onChange={e => setTask(e.target.value)} required />
      <button>Add</button>
    </form>
  )
}

