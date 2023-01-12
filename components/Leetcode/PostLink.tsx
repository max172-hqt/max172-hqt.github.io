import Link from "next/link";
import styles from "./PostLink.module.css";

export default function PostLink({ post }: { post: any }) {
  return (
    <>
      <div className={styles.container}>
        <p>{post.title.replace(/^0+/, '')}</p>
        <div>
          <Link href={`/leetcodes/${post.id}`}>Solution</Link>
          <a href={post.link}>Solve</a>
        </div>
      </div>
    </>
  );
}
