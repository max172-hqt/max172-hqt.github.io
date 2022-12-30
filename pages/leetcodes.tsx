import PostLink from "../components/Leetcode/PostLink";
import { getSortedData } from "../lib/posts";

export async function getStaticProps() {
  const allPostData = getSortedData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Leetcodes({ allPostData }) {
  console.log(allPostData)
  return (
    <>
      <h2>DSA Problems</h2>
      <div>
        {allPostData.map(post => (
          <PostLink key={post.title} post={post} />
        ))}
      </div>
    </>
  );
}
