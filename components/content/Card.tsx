import { useState } from 'react';
import Image from 'next/image';

import styles from './Card.module.css';

export interface Card {
  _id: number;
  name: string;
  description: string;
  imageURL: string;
}

export default function Layout({ _id, name, description, imageURL }: Card) {
  const [active, setActive] = useState(false);

  return (
    <div className="col">
      <div className={`card my-3 ${styles.card}`}>
        <Image
          className={`card-img-top ${styles.image}`}
          src={imageURL}
          width={256}
          height={256}
          alt="card image"
        />
        <div className={`card-body ${styles.cardBody}`}>
          <h5 className="card-title">{name}</h5>
          <p className={`card-text ${styles.description}`}>{description}</p>
          <div className={`d-flex align-items-center form-check form-switch`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="switch"
              checked={active}
              onChange={function () {
                setActive(!active);
              }}
            />
            <label
              className={`form-check-label ${styles.label} ${
                active ? styles.label__enabled : styles.label__disabled
              }`}
              htmlFor="switch"
            >
              {active ? 'Enabled' : 'Disabled'}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
