import { Header } from './components/Header';
import styles from './App.module.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

export function App() {

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
       <AddTodo />
       <TodoList />
     </div>
    
    </>
  )
}
