import { ICardItem } from './../../components/CardItem/index';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: ICardItem[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        id:1,
        img: '/img/AGROdron.png',
        name: 'Агродрон AGR A22',
        brand: 'AGR',
        model: '101-0101',
        price: 15000,
      },
      {
        id:2,
        img: '/img/MAPdron1.png',
        name: 'Дрон- Картограф STS M8',
        brand: 'STS',
        model: '101-010101',
        price: 17000,
      },
      {
        id:3,
        img: '/img/MAPdron2.png',
        name: 'Дрон - Картограф STS M1550',
        brand: 'STS',
        model: '101-01000',
        price: 20000,
      },
    ],
  });
}
