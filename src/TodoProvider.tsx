import { createContext, useState, useContext } from "react";
import uniqid from 'uniqid';
import { TodoContextType, ITodo } from './@types/todo';

// This file is probably the most 'different' - what I have done is basically abstracted the createContext Provider component
// by including all the methods being used as well as the useState hook. I have also utilized what is essentially a custom hook 
// via the useTasks hook which just references the createContext method.

// As for the methods themselves: addTodo is just using setTodos to merge in the current todos (the spread operator ...todos) with the 
// new todo, which is comprised on the checked boolean, as well as the label string (the todo itself) and also a unique id generated
// from the uniqid package. deleteTodo is just your basic filter function where we are comparing ids. updateTodos is very similar in that
// we are also comparing ids, but this time I have chosen to use a map along with the ternary so that for each itme we can either keep the same
// or change based on the checked boolean


const TodosContext = createContext<TodoContextType | null>(null);
export const useTasks = () => useContext(TodosContext)

export const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (label: string) => {
        setTodos(
            [
                ...todos, 
            {
                id: uniqid(),
                label, 
                checked: false
            }
            ])
    }
    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id: string, checked: boolean) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, checked} : todo))
    }

    return (
        <TodosContext.Provider value={{todos, addTodo, updateTodo, deleteTodo}}>
            {children}
        </TodosContext.Provider>
    )
}