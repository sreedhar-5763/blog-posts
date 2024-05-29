import { fetchPosts } from "@/lib/load-posts";
import PostCard from "@/components/post-card";
import styles from "./page.module.css";

export default async function PostsPage() {
  try {
    const posts = await fetchPosts();

    return (
      <main className={styles.main}>
        <h1 className={styles.title}>Blog posts</h1>
        <div className={styles.postsContainer}>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    throw error;
  }
}
