import { ICardNews } from '../../components/Card/index';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: ICardNews[];
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        id:1,
        img: '/img/news/news_1.jpg',
        title: 'Дроны – будущее сельского хозяйства',
        text: 'Новые технологии не&nbsp;обходят стороной и&nbsp;самую консервативную отрасль&nbsp;&mdash; сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в&nbsp;скором времени агросектор станет крупнейшим потребителем дронов&nbsp;&mdash; беспилотных летательных аппаратов (БПЛА).',
      },
      {
        id:2,
        img: '/img/news/news_2.jpg',
        title: 'Зачем нужны беспилотники в сельском хозяйстве?',
        text: 'Использование дронов в&nbsp;земледелии и&nbsp;в&nbsp;целом в&nbsp;сельском хозяйстве&nbsp;&mdash; одно из&nbsp;наиболее перспективных направлений применения этой технологии. БЛА могут быть эффективно использованы для планирования и&nbsp;контроля этапов сельскохозяйственного производства, а&nbsp;также для химической обработки посевов и&nbsp;других растений.'
      },
      {
        id: 3,
        img: '/img/news/news_3.jpg',
        title: 'Создание цифровых карт и контуров полей',
        text: 'Многие руководители агрохозяйств только приблизительно знают площади своих полей, и&nbsp;это негативно влияет на&nbsp;точность расчетов внесения минудобрений и&nbsp;подсчета полученной продукции. Чтобы эффективно управлять сельскохозяйственным предприятием потребуется точное знание посевных площадей.'
      }
     
    ],
  });
}
