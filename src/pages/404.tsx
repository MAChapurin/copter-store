import { Section } from "@/components/Section";
import Link from "next/link";

export default function Page404() {
  return (
    <Section title="Ошибка" subtitle="Страница не найдена">
      <Link href={'/'}>На главную</Link>
    </Section>
  );
}