import Link from 'next/link';
import styles from './Card.module.css';

export interface ICardNews {
  id?: string | number
  img: string
  title: string
  text: string
  isNews?: boolean
}

export function Card({ id, img, title, text, isNews = false }: ICardNews) {
  return (
    <div className={styles.card}>
      <div className={styles['image-wrap']}>
        <img src={img} alt={title} />
      </div>
      <div className={styles['content-wrap']}>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.text}>{text}</p>
        {isNews && <Link className={styles.link} href={`news/${id}`}>
          Читать полностью
        </Link>}
      </div>
    </div>
  );
}