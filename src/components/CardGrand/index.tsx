import { EIcons, Icon } from '@/ui/Icon';
import styles from './CardGrand.module.css';



interface ICardGrand {
    title: string
    src: string
    desc: string
    icon: EIcons
    titleList: string
    list: string[]
    float?: 'right' | 'left'
}

export function CardGrand({ title, src, desc, icon, titleList, list, float = 'right' }: ICardGrand): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles['image-wrap']} style={{ order: `${float === 'right' ? 0 : 1}` }}>
                <img className={styles.img} src={src} alt={title} />
            </div>
            <div className={styles['content-wrap']}>
                <p className={styles.desc}>{desc}</p>
                <h3 className={styles['title-list']}><Icon name={EIcons[icon]} /> {titleList}</h3>
                <ul className={styles.list}>
                    {list.map((el, i) => {
                        return (
                            <li className={styles.item} key={i}>
                                <Icon name={EIcons.checkwhite} />
                                {el}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.background}></div>
        </div>
    );
}