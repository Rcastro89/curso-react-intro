import "./TodoItem.css";

function TodoItem({completed, text, onDelete, onComplete
}
) {
  //const {completed, text, onDelete, onComplete} = useContext(TodoContext);

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>X</span>
    </li>
  );
}

export { TodoItem };
