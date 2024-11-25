import { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContex';

function CreateTodoButtom() {
    const { handleOpenModal } = useContext(TodoContext);
    return (
        <button className="CreateTodoButton"
            onClick={handleOpenModal}>
            +
        </button>
    );
}

export { CreateTodoButtom };