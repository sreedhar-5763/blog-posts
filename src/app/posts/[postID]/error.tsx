"use client";
import styles from "./page.module.css";

type Props = {
  error: Error;
};

export default function PostErrorBoundary({ error }: Props) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{error.message}!</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut
        laborum non incidunt cum possimus nesciunt itaque repudiandae?
        Consequuntur iste repellendus eius omnis autem eligendi accusantium
        necessitatibus perspiciatis voluptates ex.
      </p>
    </main>
  );
}
