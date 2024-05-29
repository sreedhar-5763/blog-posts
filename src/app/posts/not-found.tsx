import styles from "./page.module.css";

export default function PostsNotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>404 | Posts not found!</h1>
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fugit
        dolores illo enim cupiditate reiciendis neque in itaque voluptatum nam!
      </p>
    </main>
  );
}
