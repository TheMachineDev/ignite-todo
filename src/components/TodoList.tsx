import { useState } from 'react';
import { Todo, TodoProps } from './Todo';
import styles from './TodoList.module.css';



export function TodoList() {

  const [todos, setTodos] = useState([
    {
      id: '1',
      content: 'Terminar o desafio',
      isCompleted: false
    },
    {
      id: '2',
      content: 'Terminar o curso de React',
      isCompleted: false
    },
    {
      id: '3',
      content: 'Terminar a primeira parte do modulo de React',
      isCompleted: true
    }
  ]);

  function toggleTodoState(todoToToggledState: string, isCompleted: boolean) {
    const newTodosWithToggledOne = todos.map(todo => ({
      ...todo,
      ...(todo.id === todoToToggledState && {isCompleted: !isCompleted})
    }))
  
    setTodos(newTodosWithToggledOne);
  }
  
  //console.log(todos.filter(todo => todo.isCompleted === true).length)

  return (
    <>
      <header className={styles.listInfo}>
        <div className={styles.todoCounter}>
          <p>Tarefas criadas</p>
          <span>{todos.length}</span>
        </div>
        <div className={styles.todoCounter}>
          <p>Concluídas</p>
          <span>{todos.length > 0 ? `${todos.filter(todo => todo.isCompleted === true).length} de ${todos.length}` : 0}</span>
        </div>
      </header>

      <div className={styles.todoList}>
        {todos.map(todo => (
          <Todo key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} toggleTodoState={toggleTodoState}/>
        ))}
      </div>
    </>
  )
}