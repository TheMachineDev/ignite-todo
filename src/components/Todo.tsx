import { CheckCircle, Trash } from '@phosphor-icons/react';
import styles from './Todo.module.css';

export interface TodoProps {
  id: string;
  content: string;
  isCompleted: boolean;
  toggleTodoState: (id: string, isCompleted: boolean) => void;
}

export function Todo({ id, content, isCompleted, toggleTodoState }: TodoProps) {

  function handleTodoState(){
    toggleTodoState(id, isCompleted);
  }

  return (
    <div className={styles.todo}>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" readOnly id={id} checked={isCompleted} onClick={handleTodoState}/>
        <label htmlFor={id}>
          <span><CheckCircle className={styles.checkCircle} weight="fill" size={21}/></span>
          {content}
        </label>
      </div>
      <button title="Deletar tarefa" >
        <Trash size={18} weight="bold"/>
      </button>
    </div>
  )
}