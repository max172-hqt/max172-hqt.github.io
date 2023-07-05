import Head from "next/head";
import { getAllPostIds, getPostData, getSortedData } from "../../lib/posts";
import type { LeetcodeQuestionData, Post, PostData } from "../../types";
import { useContext, useEffect } from "react";
import { PostContext } from "../../components/layout";
import type { PostContextType } from "../../components/layout";

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
  const posts = getSortedData();

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
      posts,
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
  posts,
}: {
  postData: PostData;
  question: LeetcodeQuestionData;
  posts: Post[];
}) {
  const title = postData.title.replace(/^0+/, "");
  const difficulty: keyof typeof mapColorDifficulty = question.difficulty;
  const { setPosts } = useContext(PostContext) as PostContextType;

  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <section className="flex flex-col my-2 md:my-10 mx-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
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
