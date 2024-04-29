import { Todo } from "./Todo";
import styles from "./TodoList.module.css";
import { Empty } from "./Empty";
import { TodoType } from "../App";


interface TodoListProps {
  todos: TodoType[],
  toggleTodoState: (toggledTodo: TodoType[]) => void,
  deleteTodo: (todosWithoutDeleted: TodoType[]) => void,
}

export function TodoList({ todos, toggleTodoState, deleteTodo }:TodoListProps) {

  function handleToggleTodoState(todoToToggledState: string, isCompleted: boolean) {
    const newTodosWithToggledOne = todos.map((todo) => ({
      ...todo,
      ...(todo.id === todoToToggledState && { isCompleted: !isCompleted }),
    }));

    toggleTodoState(newTodosWithToggledOne);
  }

  function handleDeleteTodo(todoToDelete: string) {
    const todosWithoutDeletedTodo = todos.filter(
      (todo) => todo.id !== todoToDelete
    );

    deleteTodo(todosWithoutDeletedTodo);
  }
  //console.log(todos.filter(todo => todo.isCompleted === true).length)

  return (
    <div>
      <header className={styles.listInfo}>
        <div className={styles.todoCounter}>
          <p>Tarefas criadas</p>
          <span>{todos.length}</span>
        </div>
        <div className={styles.todoCounter}>
          <p>Concluídas</p>
          <span>
            {todos.length > 0
              ? `${
                  todos.filter((todo) => todo.isCompleted === true).length
                } de ${todos.length}`
              : 0}
          </span>
        </div>
      </header>

      <div className={styles.todoList}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodoState={handleToggleTodoState}
              deleteTodo={handleDeleteTodo}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
