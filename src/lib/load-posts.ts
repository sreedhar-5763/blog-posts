import { PostType } from "@/types/post-types";

export async function fetchPosts(): Promise<PostType[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: PostType[] = await res.json();
    return posts.slice(0, 20);
  } catch (error) {
    throw error;
  }
}

export async function fetchPostById(id: number): Promise<PostType> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch post ${id}`);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
}
