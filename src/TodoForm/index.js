import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContex";

function TodoForm() {
  const {
    setOpenModal,
    addTodo,
  } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const handleNewTodoValue = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form
      className="TodoForm-contaier"
      onSubmit={handleOnSubmit}
    >
      <label className="TodoForm-label">Escribe tu nuevo TODO</label>
      <textarea onChange={handleNewTodoValue} className="TodoForm-text" placeholder="Descripción de TODO" />
      <div className="TodoForm-button-container-buttom">
        <button type="buttom" onClick={handleOnSubmit} className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Crear TODO
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
