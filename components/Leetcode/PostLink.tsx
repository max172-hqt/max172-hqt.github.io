import Link from "next/link";
import styles from "./PostLink.module.css";

export default function PostLink({ post }) {
  console.log(post.id)
  return (
    <>
      <div className={styles.container}>
        <p>{post.title}</p>
        <div>
          <a href={post.link}>Go to Leetcode</a>
          <Link href={`/leetcodes/${post.id}`}>Solution</Link>
        </div>
      </div>
    </>
  );
}
