import { Todo } from './Todo';
import styles from './TodoList.module.css';

export function TodoList() {
  return (
    <>
      <header className={styles.listInfo}>
        <div className={styles.todoCounter}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.todoCounter}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>

      <div className={styles.todoList}>
        <Todo id="hello" />
        <Todo id="hello1" />
        <Todo id="hello2" />
        <Todo id="hello3" />
      </div>
    </>
  )
}