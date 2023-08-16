import { EIcons, Icon } from "@/ui/Icon";
import { ReactNode } from "react";

import styles from './CardInfo.module.css';

interface ICardInfo {
  icon: EIcons
  title: string
  children: ReactNode
}

export function CardInfo({ icon, title, children }: ICardInfo): JSX.Element {
  return (
    <div className={`${styles.card}`}>
      <h3 className={styles.h3}><div className={styles.wrap}><Icon name={icon} /></div>{title}</h3>
      {children}
    </div>
  );
}