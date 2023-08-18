import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { MapYandex } from "@/components/MapYandex";
import { Section } from "@/components/Section";
import { Btn } from "@/ui/Btn";
import Head from "next/head";
import Link from "next/link";

import styles from './contacts.module.css'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>About | Copter-store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Section title="Контакты" subtitle="Как с нами связаться">
          <div className={styles.container}>
            <div className={styles.contacts}>
              <h3 className={styles.h3}>
              AgroScout
              </h3>
              <p className={styles.subtitle}>Наш адрес</p>
              <p className={styles.info}>Россия, г. Москва</p>
              <p className={styles.subtitle}>Наш телефон</p>
              <p className={styles.info}><Link href={'+78612179118'} type="tel">+7861 21791 18</Link></p>
              <Btn text="Написать нам"/>
            </div>
          <MapYandex lat={55.752004} lon={37.617734}/>
          </div>
        </Section>
        <Section title="Нужна помошь?" subtitle="Напишите нам">
           <Form/>
        </Section>
      </main>
      <Footer/>
    </>
  )
}