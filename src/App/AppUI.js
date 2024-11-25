import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoContext } from "../TodoContex";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchTodos,
    handleComleteTodo,
    handleDeleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading /> <TodosLoading /> <TodosLoading />
          </>
        )}
        {error && <TodosError />}

        {!loading && searchTodos.length === 0 && <EmptyTodos />}

        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => handleComleteTodo(todo.text)}
            onDelete={() => handleDeleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButtom />

      {openModal && <Modal><TodoForm /></Modal>}
    </>
  );
}

export { AppUI };
