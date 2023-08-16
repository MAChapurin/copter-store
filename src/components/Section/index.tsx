import styles from './Section.module.css';

interface ISection {
  title: string
  subtitle: string
  children?: JSX.Element
}

export function Section({ title, subtitle, children }: ISection): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container relative">

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div>
          <>
            {children}
          </>
        </div>
      </div>
    </section>
  )
}