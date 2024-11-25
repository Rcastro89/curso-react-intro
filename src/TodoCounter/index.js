import React, { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContex";

function TodoCounter() {
  const {totalTodos, completedTodos} = useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      {totalTodos !== completedTodos ? (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      ) : (
        <>Has completado <span>todos</span> los todos!!!!!</>
      )}
    </h1>
  );
}

export { TodoCounter };
