import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Button.module.css";

export function Button({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles.submitButton}
      type="submit"
      {...rest}
    >
      Criar
      <PlusCircle size={20} weight="bold" />
    </button>
  );
}
