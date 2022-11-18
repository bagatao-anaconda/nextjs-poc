import Card, { Card as ICard } from './Card';
import styles from './CardList.module.css';

export interface CardList {
  cards: ICard[];
}

export default function SPA({ cards }: CardList) {
  return (
    <div className={`d-flex container-fluid ${styles.cardlistContainer}`}>
      <div className={`w-100 row row-cols-3`}>
        {cards.map((integration) => {
          const { _id, name, description, imageURL } = integration;

          return (
            <Card
              key={_id}
              _id={_id}
              name={name}
              description={description}
              imageURL={imageURL}
            />
          );
        })}
      </div>
    </div>
  );
}
