import { CheckCircle, Trash } from '@phosphor-icons/react';
import styles from './Todo.module.css';

export interface TodoType {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TodoProps {
  todo: TodoType
  toggleTodoState: (id: string, isCompleted: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function Todo({ todo, toggleTodoState, deleteTodo }: TodoProps) {

  function handleTodoState(){
    toggleTodoState(todo.id, todo.isCompleted);
  }

  function handleTodoDelete(){
    deleteTodo(todo.id);
  }

  return (
    <div className={styles.todo}>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" readOnly id={todo.id} checked={todo.isCompleted} onClick={handleTodoState}/>
        <label htmlFor={todo.id}>
          <span><CheckCircle className={styles.checkCircle} weight="fill" size={21}/></span>
          {todo.content}
        </label>
      </div>
      <button title="Deletar tarefa" onClick={handleTodoDelete}>
        <Trash size={18} weight="bold"/>
      </button>
    </div>
  )
}