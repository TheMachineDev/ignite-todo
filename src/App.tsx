import { Header } from './components/Header';
import styles from './App.module.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useState } from 'react';
import { TodoType } from './components/Todo';

export function App() {
  function createNewTodo(newValue: string) {
    const newTodo = {
      id: (Math.random() + 1).toString(36).substring(7),
      content: newValue,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
    return newTodo
  }

  function toggleTodoState(newTodosWithToggledOne: TodoType[]) {
    setTodos(newTodosWithToggledOne);
  }

  function deleteTodo(todosWithoutDeletedTodo: TodoType[]){
    setTodos(todosWithoutDeletedTodo)
  }

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

  
  return (
    <>
     <Header />
     <div className={styles.wrapper}>
       <AddTodo createNewTodo={createNewTodo} />
       <TodoList todos={todos} toggleTodoState={toggleTodoState} deleteTodo={deleteTodo}/>
     </div>
    
    </>
  )
}
