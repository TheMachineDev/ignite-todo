import styles from "./TodoListHeader.module.css";

interface TodoListHeaderProps {
  todosCount: number,
  completedTodosCount: number,
}

export function TodoListHeader({ todosCount, completedTodosCount }: TodoListHeaderProps) {
  return (
    <header className={styles.listHeader}>
      <div className={styles.todoCounter}>
        <p>Tarefas criadas</p>
        <span>{todosCount}</span>
      </div>
      <div className={styles.todoCounter}>
        <p>Concluídas</p>
        <span>
          {todosCount > 0
            ? `${completedTodosCount} de ${
                todosCount
              }`
            : 0}
        </span>
      </div>
    </header>
  );
}
