import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./post.module.css";

const LEETCODE_API_URL = "https://leetcode.com/graphql";

const GRAPHQL_QUERY = `
    query questionData($titleSlug: String) {
        question(titleSlug: $titleSlug) {
            questionId
            title
            difficulty
            content
        }
    } 
`;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id);

  const res = await fetch(LEETCODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: {
        titleSlug: params.id,
      },
    }),
  });

  const leetcodeData = await res.json();

  return {
    props: {
      postData,
      question: leetcodeData.data.question,
    },
  };
}

export default function Post({ postData, question }: {
  postData: any,
  question: any,
}) {
  const title = postData.title.replace(/^0+/, "")

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title}`}</title>
      </Head>
      <h2>{title}</h2>
      <p>Difficulty: {question.difficulty}</p>
      <article
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      ></article>
    </div>
  );
}
