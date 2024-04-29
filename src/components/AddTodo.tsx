import { PlusCircle } from '@phosphor-icons/react';
import styles from './AddTodo.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface AddTodoProps {
  createNewTodo: (newValue: string) => object;
}

export function AddTodo({ createNewTodo }: AddTodoProps) {

  const [newTodoText, setNewTodoText] = useState("");

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTodoText(event.target.value);
  }
  
  function handleCreateNewTodo(e: FormEvent) {
    e.preventDefault();
    setNewTodoText("")
    createNewTodo(newTodoText)
  }


  return (
    <form className={styles.addTodo}>
        <input
          name="searchBar"
          placeholder="Adicione uma tarefa"
          value={newTodoText}
          onChange={handleNewTodoChange}
        />
        <button type="submit" onClick={handleCreateNewTodo}>
          Criar
          <PlusCircle 
            size={20} 
            weight="bold"
          />
        </button>
    </form>
  )
}