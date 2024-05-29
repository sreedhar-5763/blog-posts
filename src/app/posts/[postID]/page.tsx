import { fetchPostById } from "@/lib/load-posts";
import styles from "./page.module.css";

type Props = {
  params: {
    postID: number;
  };
};

export default async function PostsPage({ params }: Props) {
  const { postID } = params;
  try {
    const post = await fetchPostById(postID);

    return (
      <main className={styles.main}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
      </main>
    );
  } catch (error) {
    throw error;
  }
}
