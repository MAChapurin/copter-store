import { EIcons, Icon } from "@/ui/Icon";
import Link from "next/link";

import styles from './DropDownMenu.module.css';

interface IMenuLink {
  id: number | string
  icon: EIcons
  text: string
  href: string
}

const menuStore: IMenuLink[] = [
  {
    id: 1,
    icon: EIcons.home,
    text: 'Главная',
    href: '/',
  },
  {
    id: 2,
    icon: EIcons.insect,
    text: 'Энтомофаги',
    href: '/insects'
  },
  {
    id: 3,
    icon: EIcons.drone,
    text: 'Опрыскивание',
    href: '/spraying'
  },
  {
    id: 4,
    icon: EIcons.map,
    text: 'Картография и мониторинг',
    href: '/mapping'
  },
  {
    id: 5,
    icon: EIcons.copter,
    text: 'Каталог продукции',
    href: '/catalog'
  },
  {
    id: 6,
    icon: EIcons.news,
    text: 'Новости',
    href: '/catalog'
  },
  {
    id: 7,
    icon: EIcons.company,
    text: 'О компании',
    href: '/about'
  },
  {
    id: 8,
    icon: EIcons.contacts,
    text: 'Контакты',
    href: '/contacts'
  },
];

export function DropDownMenu() {
  return (
    <nav className={styles.container}>
      {menuStore.map(({ id, icon, text, href }) => <Link className={styles.link} key={id} href={href}><Icon name={icon} />{text}</Link>)}
      <div className={styles.separator}></div>
      <div className={styles.socials}>
        <Link href={'/'}>
          <Icon name={EIcons.whatsup} />
          <Icon name={EIcons.telegram} />
          <Icon name={EIcons.wechat} />
        </Link>
      </div>

    </nav>
  )
}