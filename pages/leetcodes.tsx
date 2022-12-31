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

export default function Leetcodes({ allPostData }: { allPostData: any }) {
  console.log(allPostData);
  return (
    <>
      <h2>Leetcode Problems</h2>
      <div>
        {allPostData.map((post: any) => (
          <PostLink key={post.title} post={post} />
        ))}
      </div>
    </>
  );
}
