import { createContext, useState, useContext } from "react";
import uniqid from 'uniqid';
import { TodoContextType, ITodo } from './@types/todo';

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