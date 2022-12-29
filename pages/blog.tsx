import { getSortedData } from "../lib/posts";

export async function getStaticProps() {
  const allPostData = getSortedData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Blog({ allPostData }) {
  console.log(allPostData)
  return (
    <>
      <h2>DSA Problems</h2>
      <ul>
        {allPostData.map(post => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
