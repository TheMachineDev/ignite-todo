import { Header } from "./components/Header";
import styles from "./App.module.css";
import { TodoListHeader } from "./components/TodoListHeader";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Todo } from "./components/Todo";
import { Empty } from "./components/Empty";

export interface TodoType {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleCreateNewTodo(e: FormEvent) {
    e.preventDefault();
    if (inputValue) {
      const newTodo = {
        id: uuid(),
        content: inputValue,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  }

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

  const isSubmitDisabled = !inputValue;
  const todosCount = todos.length
  // todos.filter((todo) => todo.isCompleted === true).length
  const completedTodosCount = todos.reduce((counter, currentTodo) => {
    if (currentTodo.isCompleted)
      counter += 1
    return counter
  }, 0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.addTodo}>
          <Input value={inputValue} onChange={handleValueChange} />
          <Button disabled={isSubmitDisabled} onClick={handleCreateNewTodo} />
        </form>
        <div>
          <TodoListHeader todosCount={todosCount} completedTodosCount={completedTodosCount}/>

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
      </div>
    </>
  );
}
