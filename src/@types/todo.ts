export interface ITodo {
    id: string;
    label: string;
    checked: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[];
    addTodo: (todo: string) => void;
    updateTodo: (id: string, checked: boolean) => void;
    deleteTodo:  (id: string) => void;
  };