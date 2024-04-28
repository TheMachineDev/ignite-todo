import { CheckCircle, Trash } from '@phosphor-icons/react';
import styles from './Todo.module.css';

interface TodoProps {
  id: string;
}

export function Todo({ id }: TodoProps) {

  return (
    <div className={styles.todo}>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>
          <span><CheckCircle className={styles.checkCircle} weight="fill" size={21}/></span>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer lolololo.
        </label>
      </div>
      <button title="Deletar tarefa">
        <Trash size={18} weight="bold"/>
      </button>
    </div>
  )
}