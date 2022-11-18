import { GetStaticProps } from 'next';

import { CardList as ICardList } from '../components/content/CardList';
import CardList from '../components/content/CardList';

export default function SSG({ cards }: ICardList) {
  return (
    <div className="d-flex w-100">
      <CardList cards={cards} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async function (ctx) {
  console.log('SSG');

  let json = { data: [] };
  try {
    const res = await fetch(`http://localhost:3000/api/data`);
    json = await res.json();
  } catch (error) {
    // ignore error
  }

  return {
    props: { cards: json.data },
    revalidate: 10,
  };
};
