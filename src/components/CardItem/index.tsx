import { Btn } from '@/ui/Btn';
import styles from './CardItem.module.css';

export interface ICardItem {
  id: string | number
  img: string
  name: string
  brand: string
  model: string
  price: number
}

export function CardItem({img, name, brand, model, price}: ICardItem): JSX.Element {
  return (
    <div className={styles.card}>
      <img src={img} alt={name} />
      <div className={styles.desc}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.brand}>Бренд: {brand}</p>
        <p className={styles.model}>Модель: {model}</p>
        <p className={styles.price}>${price}</p>
        <Btn text='Добавить в корзину'/>
      </div>
    </div>
  );
}