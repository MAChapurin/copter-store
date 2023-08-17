import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import styles from './Btn.module.css'

interface IBtn extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
}

export function Btn({ text, ...props }: IBtn) {
  return (
    <button className={styles.btn} {...props}>{text}</button>
  );
}