import { useState } from "react";
import { Todo, TodoProps } from "./Todo";
import styles from "./TodoList.module.css";
import { Empty } from "./Empty";

export function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      content: "Terminar o desafio",
      isCompleted: false,
    },
    {
      id: "2",
      content: "Terminar o curso de React",
      isCompleted: false,
    },
    {
      id: "3",
      content: "Terminar a primeira parte do modulo de React",
      isCompleted: true,
    },
  ]);

  function toggleTodoState(todoToToggledState: string, isCompleted: boolean) {
    const newTodosWithToggledOne = todos.map((todo) => ({
      ...todo,
      ...(todo.id === todoToToggledState && { isCompleted: !isCompleted }),
    }));

    setTodos(newTodosWithToggledOne);
  }

  function deleteTodo(todoToDelete: string) {
    const todosWithoutDeletedTodo = todos.filter(
      (todo) => todo.id !== todoToDelete
    );

    setTodos(todosWithoutDeletedTodo);
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
              toggleTodoState={toggleTodoState}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
