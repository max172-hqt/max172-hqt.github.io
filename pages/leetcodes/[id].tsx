import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "./post.module.css";
import type { LeetcodeQuestionData, PostData } from "../..";

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

  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>{`${title}`}</title>
  //     </Head>
  //     <h2>{title}</h2>
  //     <p><span style={{ color: mapColorDifficulty[difficulty] }}>{difficulty}</span></p>
  //     <article
  //       className="markdown-body"
  //       dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
  //     ></article>
  //   </div>
  // );

  return (
    <section className="flex flex-col my-5 sm:my-10 px-4 mx-auto">
      <Head>
        <title>{`${title}`}</title>
      </Head>
      <div className="flex flex-col">
        <div className="flex-grow">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{title}</h1>
          <p>
            <span style={{ color: mapColorDifficulty[difficulty] }}>
              {difficulty}
            </span>
          </p>
        </div>

        {/* <div>
          <a
            href={postData.link}
            target="_blank"
            className="bg-amber-600 hover:bg-amber-700 transition ease-in-out duration-300 rounded  py-2 px-4 font-bold text-white"
            rel="noreferrer"
          >
            Go To Leetcode
          </a>
        </div> */}
        <article
          className="prose prose-zinc md:prose-md my-4 md:my-16"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></article>
      </div>
    </section>
  );
}
