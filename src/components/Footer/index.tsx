import { EIcons, Icon } from '@/ui/Icon';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
       <div className={`container ${styles['footer-wrap']}`}>
        <Link href="/" className={styles.logo}>
          <img src="/LogoAgro.png" alt="logo" />
        </Link>
        <Link href={'/'} className={styles.mra}>
          <Icon name={EIcons.phone} /> +7861 21791 18
        </Link>
        
        <div className={styles['social-group']}>
          <span className={styles.calling}>Подписывайтесь на наши соц. сети</span>
          <Link href="/" className={styles.social}>
          <Icon name={EIcons.vk}/>
          </Link>
          <Link href="/" className={styles.social}>
          <Icon name={EIcons.instagram}/>

          </Link>
          <Link href="/" className={`${styles.social}`}>
          <Icon name={EIcons.tiktok}/>
          </Link>
        </div>
        </div>
    </footer>
  );
}