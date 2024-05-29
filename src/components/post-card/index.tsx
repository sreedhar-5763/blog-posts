import Link from "next/link";
import Card from "@/components/card";
import { PostType } from "@/types/post-types";
import styles from "./index.module.css";

export default function PostItem({ title, id }: PostType) {
  return (
    <Link href={`/posts/${id}`} className={styles.linkWrapper}>
      <Card>
        <p className={styles.postTitle}>{title}</p>
      </Card>
    </Link>
  );
}
