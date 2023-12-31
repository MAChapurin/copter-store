import React from 'react';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import styles from '@/styles/Home.module.css';

import Head from '../../node_modules/next/head';

import { Roboto } from 'next/font/google';
import { Section } from '@/components/Section';

// import { VitrinaSVG } from '@/components/VitrinaSVG';
import { CardInfo } from '@/components/CardInfo';
import { EIcons } from '@/ui/Icon';
import { CardItem, ICardItem } from '@/components/CardItem';
import { ServicesMain } from '@/components/ServicesMain';
import { PartHidden } from '@/components/PartHidden';
import { RussiaMap } from '@/components/RussiaMap';
import Link from 'next/link';
import { Card, ICardNews } from '@/components/Card';
import { Footer } from '@/components/Footer';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'], display: 'swap',
  weight: ['300', '400', '700']
});




export default function Home(): JSX.Element {
  const [coptersList, setCoptersList] = React.useState([]);
  const [newsList, setNewsList] = React.useState([]);

  function getCopters(url: string): Promise<void> {
    return fetch(url).then(res => res.json()).then(({ data }) => {
      setCoptersList(data);
    });
  }

  function getNews(url: string): Promise<void>  {
    return fetch(url).then(res => res.json()).then(({ data }) => {
      console.log(data);
      setNewsList(data);
    });
  }

  React.useEffect(() => {
    getCopters('/api/copters');
    getNews('api/news');
  }, []);
  return (
    <>
      <Head>
        <title>Home | Copter-store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${roboto.className}`}>
        <Hero src={'/img/copter-bg-1.jpg'} title='AgroScout - беспилотные технологии для сельского хозяйства и промышлености'>
          <>
            {/* <h2 className={styles.h1}></h2> */}
            <div className={styles['info-wrap']}>
              <div className={styles.info}>
                <span className={styles['span-info']}>50 000 Га</span>
                <br />
                ежегодной обработки
              </div>
              <div className={styles.info}>
                <span className={styles['span-info']}>30% </span>
                <br />
                экономии средств
              </div>
              <div className={styles.info}>
                <span className={styles['span-info']}>10 команд</span>
                <br />
                экономии средств
              </div>
            </div>
          </>
        </Hero>
        <Section title='Наши преимущества' subtitle='почему нам доверяют'>
          <div className={styles['card-info-wrap']}>
            <CardInfo icon={EIcons.people} title='Квалифицированные сотрудники'>
              Все наши сотрудники имеют многолетний опыт работы в&nbsp;сфере беспилотной авиации. Нами было реализовано множество проектов различной тематики и&nbsp;самой различной сложности.
            </CardInfo>
            <CardInfo icon={EIcons.tech} title='Высокотехнологичное оборудование '>
              Наша компания использует современное оборудование, которое обеспечивает высокое качество в&nbsp;выполнении поставленных задач.
            </CardInfo>
            <CardInfo icon={EIcons.rub} title='Экономия'>
              Использование беспилотных технологий экономит вам много времени и&nbsp;денег. За&nbsp;счет отсутствия технологической колеи сохраняется до&nbsp;6% урожая. Снижение расхода препаратов до&nbsp;30%
            </CardInfo>
            <CardInfo icon={EIcons.services} title='Оперативность'>
              За&nbsp;рабочую смену наши специалисты способны защитить более 1000 гектар ваших полей, кустарников и&nbsp;деревьев.
            </CardInfo>
            <CardInfo icon={EIcons.drone4} title='Собственное производство'>
              Мы&nbsp;разрабатываем и&nbsp;производим беспилотные летательные аппараты, поэтому знаем все тонкости их&nbsp;работы и&nbsp;можем настроить их&nbsp;под конкретные задачи и&nbsp;потребности клиентов.
            </CardInfo>
            <CardInfo icon={EIcons.web} title='Свой сервис'>
              Любой наш аппарат можно сдать на&nbsp;плановое техническое обслуживание или&nbsp;же в&nbsp;ремонт в&nbsp;наш собственный сервис,
              который гарантирует качество и&nbsp;оперативность выполнения работ.
            </CardInfo>
          </div>
        </Section>
        <Section title='Наша продукция' subtitle='Наши предложения'>
          <div className={styles['card-info-wrap']}>
            {/* <CardItem img='/img/AGROdron.png' name='Агродрон AGR A22' brand='AGR' model='101-0101' price={15000} /> */}
            {coptersList.length && coptersList.map((copter: ICardItem) => {
              return <CardItem key={copter.id} {...copter} />;
            })}
          </div>
        </Section>
        <ServicesMain />
        <Section title='О компании' subtitle='Кто мы такие'>
          <PartHidden>
            Компания STS.center применяет высокотехнологичные агродроны и&nbsp;БПЛА, которые модернизированы и&nbsp;собраны нашими инженерами для сельского и&nbsp;лесного хозяйства, а&nbsp;также для промышленности. В&nbsp;СТС Центр работают опытные агрономы, энтомологи, пилоты, менеджеры и&nbsp;инженеры. Сегодня мы&nbsp;имеем один из&nbsp;самых современных парков дронов в&nbsp;России, что позволяет нам выполнять работы широкого спектра от&nbsp;простой аэрофотосъемки до&nbsp;лидарного сканирования местности и&nbsp;тепловизионного контроля. Внедрение беспилотных технологий в&nbsp;вашем бизнесе поможет сэкономить время и&nbsp;деньги, а&nbsp;также позволит получить большое преимущество перед вашими конкурентами.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis ea minima dolore corrupti iure, qui enim totam illo eveniet ex dolorem fugit ducimus doloremque optio quia, ipsa est nesciunt.Компания STS.center применяет высокотехнологичные агродроны и&nbsp;БПЛА, которые модернизированы и&nbsp;собраны нашими инженерами для сельского и&nbsp;лесного хозяйства, а&nbsp;также для промышленности. В&nbsp;СТС Центр работают опытные агрономы, энтомологи, пилоты, менеджеры и&nbsp;инженеры. Сегодня мы&nbsp;имеем один из&nbsp;самых современных парков дронов в&nbsp;России, что позволяет нам выполнять работы широкого спектра от&nbsp;простой аэрофотосъемки до&nbsp;лидарного сканирования местности и&nbsp;тепловизионного контроля. Внедрение беспилотных технологий в&nbsp;вашем бизнесе поможет сэкономить время и&nbsp;деньги, а&nbsp;также позволит получить большое преимущество перед вашими конкурентами.
          </PartHidden>
        </Section>
        <Section title='Страны присутствия' subtitle='Где мы работаем'>
          <RussiaMap />
        </Section>
        <Section title='Партнеры' subtitle='Наши клиенты'>
          <div className={styles['client-wrap']}>
            <Link style={{ padding: '10px' }} href='/'>
              <img src="/img/logo_bionovatic.svg" alt="logo_bionovatic" />
            </Link>
            <Link style={{ padding: '10px' }} href='/'>
              <img src="/img/logo_bayer.svg" alt="logo_bayer" />
            </Link>
            <Link style={{ padding: '10px' }} href='/'>
              <img src="/img/logo_corteva.svg" alt="logo_corteva" />
            </Link>
            <Link style={{ padding: '10px' }} href='/'>
              <img src="/img/logo_kws.svg" alt="logo_kws" />
            </Link>
          </div>
        </Section>
        <Section title='Новости' subtitle='Что у нас нового'>
          <div className={styles.news}>
            {newsList.length && newsList.map((news: ICardNews)=> {
              return <Card key={news.id} {...news} isNews />;
            })}
          </div>
        </Section>
        {/* <VitrinaSVG /> */}
      </main>
        <Footer/>
    </>
  );
}
