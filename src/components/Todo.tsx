import { CheckCircle, Trash } from "@phosphor-icons/react";
import styles from "./Todo.module.css";
import { TodoType } from "../App";

interface TodoProps {
  todo: TodoType;
  toggleTodoState: (id: string, isCompleted: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function Todo({ todo, toggleTodoState, deleteTodo }: TodoProps) {
  function handleTodoState() {
    toggleTodoState(todo.id, todo.isCompleted);
  }

  function handleTodoDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div className={styles.todo}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          readOnly
          id={todo.id}
          checked={todo.isCompleted}
          onClick={handleTodoState}
        />
        <label htmlFor={todo.id}>
          <span>
            <CheckCircle
              className={styles.checkCircle}
              weight="regular"
              size={24}
            />
          </span>
          <p>{todo.content}</p>
        </label>
      </div>
      <button title="Deletar tarefa" onClick={handleTodoDelete}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  );
}
