import styles from './Steps.module.css';
import { nanoid } from 'nanoid';

interface ISteps {
  list: string[]
}

export function Steps({ list }: ISteps): JSX.Element {
  const cardsIndex = [0,2,5,7];
  return (
    <ul className={styles.ul}>
      {list.map((el, i) => {
        return (
          <li key={nanoid()} className={`${styles.li} ${cardsIndex.includes(i) ? styles.card : styles.text}`}>
            {el}
          </li>
        );
      })}
    </ul>
  );
}