import styles from "./page.module.css";

export default function HomeDefault() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Default home page!</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut
        laborum non incidunt cum possimus nesciunt itaque repudiandae?
        Consequuntur iste repellendus eius omnis autem eligendi accusantium
        necessitatibus perspiciatis voluptates ex.
      </p>
    </main>
  );
}
