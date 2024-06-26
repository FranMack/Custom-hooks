import { todoReducer } from "./todoReducer";
import { useReducer,useEffect } from "react";

export function useTodo() {
    const initialState=[ ]
  const init = () => {
    return JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[ADD TODO]",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[REMOVE TODO]",
      payload: id,
    };

    dispatchTodo(action);
  };

  const handleTodoDone = (id) => {
    const action = {
      type: "[DONE TODO]",
      payload: id,
    };

    dispatchTodo(action);
  };


  const todoCount=()=>{

    return todos.length
  }

  const todosPending=()=>{

    return todos.filter((item)=>{if(!item.done){return item}}).length
  }


  return{
    todos,
    todoCount,
    todosPending,
    handleNewTodo,
    handleDeleteTodo,
    handleTodoDone

  }
}
