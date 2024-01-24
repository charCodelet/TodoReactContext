// I decided to just take care of all the types at the top level while attempting to demonstrate facility with Typescript in general;
// hence, the usage of an interface, etc.

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