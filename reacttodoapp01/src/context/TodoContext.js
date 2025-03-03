import React, { createContext, useContext } from "react";


// we can access this TodoContext wnywhere where we want to do , Simply we have the frame which we can use to add choices, functions
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export default useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
