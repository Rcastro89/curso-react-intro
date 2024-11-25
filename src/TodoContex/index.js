import React, { useState } from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: defaultTodos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = defaultTodos.filter((x) => !!x.completed).length;
  const totalTodos = defaultTodos.length;
  const searchTodos = searchValue
    ? defaultTodos.filter((x) =>
        x.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultTodos;
  const [openModal, setOpenModal] = useState(false);

  const handleComleteTodo = (text) => {
    const newTodos = [...defaultTodos];
    const todoIndex = newTodos.findIndex((x) => x.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const handleDeleteTodo = (text) => {
    const newTodos = [...defaultTodos];
    const todosDelete = newTodos.filter((x) => x.text !== text);
    saveTodos(todosDelete);
  };

  const handleOpenModal = () => {
    setOpenModal(state => !state);
  };

  const addTodo = (value) => {
    const newTodos = [...defaultTodos];
    newTodos.push({ text: value, completed: false});
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchTodos,
        setSearchValue,
        handleComleteTodo,
        handleDeleteTodo,
        openModal,
        setOpenModal,
        handleOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function TodoConsumer() {
  return <TodoContext.Consumer></TodoContext.Consumer>;
}

export { TodoContext, TodoProvider, TodoConsumer };
