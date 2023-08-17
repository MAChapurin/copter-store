import React from 'react';
import { BgDrone } from './BgDrone';

import styles from './Hero.module.css';

interface IHero {
  src: string
  title: string
  desc?: string
  children: JSX.Element
}

export function Hero({ src, title, desc = '', children }: IHero): JSX.Element {
  return (
    <section className={styles.back} style={{ backgroundImage: `url(${src})` }}>

      <div className={`container`}>
        <div className={styles.container}>
          <h2 className={styles.h2}>{title}</h2>
          <p className={styles.desc}>
            {desc}
            <BgDrone />
          </p>
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    </section>
  );
}
