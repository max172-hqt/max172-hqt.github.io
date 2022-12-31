import Link from "next/link";
import styles from "./PostLink.module.css";

export default function PostLink({ post }: { post: any }) {
  console.log(post.id);
  return (
    <>
      <div className={styles.container}>
        <p>{post.title}</p>
        <div>
          <Link href={`/leetcodes/${post.id}`}>Solution</Link>
          <a href={post.link}>Go to Leetcode</a>
        </div>
      </div>
    </>
  );
}