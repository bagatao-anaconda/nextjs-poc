import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import styles from './SideBar.module.css';

export default function SideBar() {
  const { asPath } = useRouter();

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-white ${styles.sidebar}`}
    >
      <a
        href="/"
        className={`d-flex align-items-center my-1 text-white text-decoration-none`}
      >
        <Image
          src="/img/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className={`mx-1 ${styles.logo}`}
        />
        <span className="fs-4 mx-1">Anaconda</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page">
            Dashboard
          </a>
        </li>
        <li>
          <a className="nav-link text-white">Products</a>
        </li>
        <li>
          <a className="nav-link text-white">Services</a>
        </li>
        <li>
          <a className="nav-link text-white active">Integrations</a>
        </li>
        <li>
          <a className="nav-link text-white">Marketplace</a>
        </li>
      </ul>
      <div className="btn-group" role="group">
        <Link
          href="/spa"
          type="button"
          className={`btn btn-light ${asPath === '/spa' && styles.active}`}
        >
          SPA
        </Link>
        <Link
          href="/ssr"
          type="button"
          className={`btn btn-light ${asPath === '/ssr' && styles.active}`}
        >
          SSR
        </Link>
        <Link
          href="/ssg"
          type="button"
          className={`btn btn-light ${asPath === '/ssg' && styles.active}`}
        >
          SSG
        </Link>
      </div>
      <hr />
      <div>
        <a className="d-flex align-items-center text-white text-decoration-none">
          <Image
            src="https://github.com/brunoagatao.png"
            alt="github-image"
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong>bagatao</strong>
        </a>
      </div>
    </div>
  );
}
