import { useEffect, useState } from 'react';

import { PuffLoader } from 'react-spinners';
import CardList from '../components/content/CardList';

export default function SPA() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(function () {
    console.log('SPA');

    async function getCards() {
      try {
        const res = await fetch('/api/data');
        const json = await res.json();
        setCards(json.data);
      } catch (error) {
        // ignore error
      }

      return setLoading(false);
    }

    const timer = setTimeout(getCards, 3000);

    return function () {
      clearTimeout(timer);
    };
  }, []);

  return loading ? <PuffLoader color="#43b049" /> : <CardList cards={cards} />;
}
