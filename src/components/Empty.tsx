import styles from './Empty.module.css';
import clipboardIcon from '../assets/clipboard.svg';

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboardIcon} alt="Clipboard icon" />
      <span>
        <b>Você ainda não tem tarefas cadastradas</b>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </span>
      
    </div>
  )
}