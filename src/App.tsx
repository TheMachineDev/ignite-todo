import { Header } from './components/Header';
import styles from './App.module.css';
import { TodoList } from './components/TodoList';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Input } from './components/Input';
import { Button } from './components/Button';

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
      }
      setTodos([...todos, newTodo]) 
    }
  }

  function handleToggleTodoState(newTodosWithToggledOne: TodoType[]) {
    setTodos(newTodosWithToggledOne);
  }

  function handleDeleteTodo(todosWithoutDeletedTodo: TodoType[]){
    setTodos(todosWithoutDeletedTodo)
  }

  const isSubmitDisabled = !inputValue

  return (
    <>
     <Header />
      <div className={styles.wrapper}>
        <form className={styles.addTodo}>
          <Input value={inputValue} onChange={handleValueChange} /> 
          <Button disabled={isSubmitDisabled} onClick={handleCreateNewTodo} />
        </form>
        <TodoList todos={todos} toggleTodoState={handleDeleteTodo} deleteTodo={handleToggleTodoState}/>
      </div>
    </>
  )
}
