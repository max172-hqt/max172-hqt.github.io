import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./post.module.css";
import type { LeetcodeQuestionData, PostData } from "../../types";
import LeetcodeSidebar from "../../components/LeetcodeSidebar";

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

const mapColorDifficulty = {
  Easy: "#43A047",
  Medium: "#EF6C00",
  Hard: "#E91E62",
};

export default function Post({
  postData,
  question,
}: {
  postData: PostData;
  question: LeetcodeQuestionData;
}) {
  const title = postData.title.replace(/^0+/, "");
  const difficulty: keyof typeof mapColorDifficulty = question.difficulty;

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <section className="flex flex-col my-10 sm:mx-0 mx-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {title}
        </h1>
        <p>
          <span style={{ color: mapColorDifficulty[difficulty] }}>
            {difficulty}
          </span>
        </p>
        <article
          className="prose prose-zinc "
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></article>
      </section>
    </>
  );
}
