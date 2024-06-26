import { InputHTMLAttributes } from "react";
import styles from './Input.module.css'

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={styles.formInput}
      placeholder="Adicione uma tarefa"
      {...rest}
    />
  )
}