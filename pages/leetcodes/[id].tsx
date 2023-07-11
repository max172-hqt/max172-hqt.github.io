import Head from "next/head";
import { getAllPostIds, getPostData, getSortedData } from "../../lib/posts";
import type { LeetcodeQuestionData, Post, PostData } from "../../types";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../components/layout";
import type { PostContextType } from "../../components/layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import classNames from "classnames";

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
  const router = useRouter();
  const difficulty: keyof typeof mapColorDifficulty = question.difficulty;
  const { setPosts } = useContext(PostContext) as PostContextType;
  const [problemExpanded, setProblemExpanded] = useState(true);
  const [solutionExpanded, setSolutionExpanded] = useState(false);

  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);

  useEffect(() => {
    setProblemExpanded(true);
    setSolutionExpanded(false);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <section className="flex flex-col my-2 md:my-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight md:leading-none mb-6 md:text-left mx-3">
          {title}
        </h1>
        <div className="flex mx-3 mb-2 items-center gap-4">
          <div style={{ color: mapColorDifficulty[difficulty] }}>
            {difficulty}
          </div>
          <a
            href={postData.link}
            target="_blank"
            className="hover:text-amber-600 hover:dark:text-amber-600 transition ease-in-out duration-300 font-semibold text-slate-800 dark:text-slate-200"
            rel="noreferrer"
          >
            Try it yourself
          </a>
        </div>
        <Accordion
          elevation={0}
          disableGutters
          square
          expanded={problemExpanded}
          className={classNames("dark:bg-slate-900", {
            "mb-6": problemExpanded,
          })}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-amber-600" />}
            aria-controls="problem-content"
            id="problem-header"
            onClick={() => setProblemExpanded(!problemExpanded)}
          >
            <div className="text-xl font-bold text-amber-600">
              Problem Statement
            </div>
          </AccordionSummary>
          <AccordionDetails className="border-l dark:border-l-slate-700 border-l-slate-200 ml-4">
            <article
              className="leetcode"
              dangerouslySetInnerHTML={{ __html: question.content }}
            ></article>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          disableGutters
          square
          expanded={solutionExpanded}
          className="dark:bg-slate-900"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-amber-600" />}
            aria-controls="solution-content"
            id="solution-header"
            onClick={() => setSolutionExpanded(!solutionExpanded)}
          >
            <div className="text-xl font-bold text-amber-600">
              Notes & Solution
            </div>
          </AccordionSummary>
          <AccordionDetails className="border-l dark:border-l-slate-700 border-b-slate-200 ml-4">
            <article
              className="prose dark:prose-invert prose-slate text-black dark:text-slate-300"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            ></article>
          </AccordionDetails>
        </Accordion>
      </section>
    </>
  );
}
