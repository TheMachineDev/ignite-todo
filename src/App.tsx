import { Header } from './components/Header';
import styles from './App.module.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface TodoType {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  function createNewTodo(inputValue: string) {
    if (inputValue) {

      const newTodo = {
        id: uuid(),
        content: inputValue,
        isCompleted: false,
      }
      setTodos([...todos, newTodo]) 
      return newTodo
    }
  }

  function handleToggleTodoState(newTodosWithToggledOne: TodoType[]) {
    setTodos(newTodosWithToggledOne);
  }

  function handleDeleteTodo(todosWithoutDeletedTodo: TodoType[]){
    setTodos(todosWithoutDeletedTodo)
  }

  const [todos, setTodos] = useState<TodoType[]>([]);
  
  return (
    <>
     <Header />
     <div className={styles.wrapper}>
       <AddTodo createNewTodo={createNewTodo} />
       <TodoList todos={todos} toggleTodoState={handleDeleteTodo} deleteTodo={handleToggleTodoState}/>
     </div>
    </>
  )
}
