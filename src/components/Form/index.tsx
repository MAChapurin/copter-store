import { Btn } from '@/ui/Btn'
import styles from './Form.module.css'

export function Form() {
  return (
    <div className={styles.container}>
    <p className={styles.desc}>Остались вопросы, заполните форму, и&nbsp;мы&nbsp;в&nbsp;течении 5&nbsp;минут свяжемся с&nbsp;вами</p>
    <form className={styles.form}>
      <input type="text" className={styles.input} placeholder="Ваше имя"/>
      <input type="tel" className={styles.input} placeholder="Ваш телефон"/>
      <input type="email" className={styles.input} placeholder="Ваш Email"/>
      <Btn style={{position: 'relative', zIndex: 3}} text='Отправить' type='submit'/>
      <img className={styles.drone} src="/img/drone-form.png" alt="Дрон"/>
      <img className={styles.circles} src="/img/bg-circles.svg" alt="круги на полях"/>
    </form>
    <span>Политика конфидициальности</span>
    </div>
  )
}