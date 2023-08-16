import React from 'react';

import styles from './Hero.module.css';

interface IHero {
  src: string
  children: JSX.Element
}

export function Hero({ src, children }: IHero): JSX.Element {
  return (
    <section className={styles.back} style={{ backgroundImage: `url(${src})` }}>
      {/* <svg
        className={styles.front}
        xmlns='http://www.w3.org/2000/svg'
        width='1919'
        height='650'
        viewBox='0 0 1919 650'
        fill='none'
      >
        <path
          d='M1096.2 67.3C1114.5 44.9 1132.7 22.4 1151 0C1151 0 1897.1 5.3 1919 5.5V0H-1V241.5C-1 241.5 141 274.4 204.4 290.2C274.3 307.6 273.9 357.1 296.8 406.1C306.9 427.8 312.7 452.2 292.5 470.3C263.3 496.5 232 520.1 204.4 547.8C178.7 573.6 137.7 553.5 137.7 553.5L79.5 540.6L-1 522.1V650H1919V163.5L1620.5 437.3C1620.5 437.3 1506.5 540 1462.5 582.9C1449.1 595.9 1434.8 607.2 1415.1 607C1398.8 606.8 1382.2 599.8 1367.1 596C1347.6 591.1 1328 586.2 1308.5 581.3C1280.2 574.2 1251.9 567.1 1223.5 560C1194.5 472.2 1071 475.7 1071 475.7C1071 475.7 1022 321.1 999 251.3C985.3 209.9 994.9 187.5 1023.3 157.4C1049.9 129.3 1071.8 97.3 1096.2 67.3Z'
          fill='#181818'
          fill-opacity='0.96'
        />
      </svg> */}

      <div className={`container`}>
        <div className={styles.children}>
        {children}
        </div>
      </div>

    </section>
  );
}
