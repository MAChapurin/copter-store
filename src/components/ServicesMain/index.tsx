import Link from 'next/link';
import styles from './ServicesMain.module.css'

export function ServicesMain(): JSX.Element {
  return (
    <section className={styles.section}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="1226" height="650" viewBox="0 0 1226 650" fill="none">
        <path d="M0 0H1226L917.263 650H0V0Z" fill="#181818" fill-opacity="0.9" />
      </svg>
      <div className={`container ${styles.wrap}`}>
        <h2 className={styles.h2}>Оказываем услуги!</h2>
        <p className={styles.desc}>
          Принимаем заявки по&nbsp;биологической и&nbsp;химической защите растений дронами, картографии и&nbsp;мониторингу.
        </p>
        <Link className={styles.link} href='/'>
          Оставить заявку
        </Link>
      </div>
    </section>
  );
}