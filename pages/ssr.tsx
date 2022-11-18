import { GetServerSideProps } from 'next';

import { CardList as ICardList } from '../components/content/CardList';
import CardList from '../components/content/CardList';

export default function SSR({ cards }: ICardList) {
  return (
    <div className="d-flex w-100">
      <CardList cards={cards} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async function (ctx) {
  console.log('SSR');

  let json = { data: [] };
  try {
    const res = await fetch(`http://${ctx.req.headers.host}/api/data`);
    json = await res.json();
  } catch (error) {
    // ignore error
  }

  return {
    props: { cards: json.data },
  };
};
