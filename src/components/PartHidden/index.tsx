import { EIcons, Icon } from "@/ui/Icon";
import React, { ReactNode } from "react";

import styles from './PartHidden.module.css'

interface IPartHidden {
  children: ReactNode
}

// type THeight = '200px' | 'min-content';


export function PartHidden({children}: IPartHidden): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.content} style={{height: `${!isOpen ? '80px' : '300px'}`}}>
      {children}
    <div className={styles.curtain}></div>
    <div className={styles.wrap}>
      <div className={styles.line}></div>
      <button className={`${styles.btn} ${isOpen ? styles.active : null}`} onClick={()=> {
        setIsOpen(prev => !prev);
      }}><Icon name={EIcons.arrow}/></button>
      <div className={styles.line}></div>
    </div>
    </div>

  );
}