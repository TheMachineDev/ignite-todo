import { PlusCircle } from '@phosphor-icons/react';
import styles from './AddTodo.module.css';

export function AddTodo() {
  return (
    <form className={styles.addTodo}>
        <input
          name="searchbar"
          placeholder="Adicione uma tarefa"
        />
        <button type="submit">
          Criar
          <PlusCircle 
            size={20} 
            weight="bold"
          />
        </button>
    </form>
  )
}