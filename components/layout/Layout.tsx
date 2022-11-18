import React, { ReactNode } from 'react';
import SideBar from './SideBar';

import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={`d-flex ${styles.layout}`}>
      <SideBar />
      <main className="w-100 d-flex justify-content-center align-items-center">
        {children}
      </main>
    </div>
  );
}
