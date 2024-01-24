import { useState } from 'react'
import "./todo-form.scss";
import { useTasks } from '../../TodoProvider'

export const TodoForm = () => {
  
  const [task, setTask] = useState('')
  const { addTodo } = useTasks()


  const submit = e => {
    console.log(task, `--> task`);
    e.preventDefault()
    addTodo(task)
    setTask('')
  }

  return (
   
    <form className="todo-form"onSubmit={submit}>
      <input type="text" value={task} placeholder="Anything to do today?" onChange={e => setTask(e.target.value)} required />
      <button>Add</button>
    </form>
  )
}

