"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/posts",
    title: "Posts",
  },
];

export default function Header() {
  const pathname = usePathname();

  const linkItems = navLinks.map(({ href, title }) => (
    <Link key={title} href={href}>
      <li className={`${pathname === href ? styles.active : ""} ${styles.li}`}>
        {title}
      </li>
    </Link>
  ));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={50}
            height={30}
            priority
          />
        </Link>
        <ul className={styles.ul}>{linkItems}</ul>
      </nav>
    </header>
  );
}
