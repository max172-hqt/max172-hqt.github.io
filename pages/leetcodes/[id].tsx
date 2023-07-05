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
  const [problemExpanded, setProblemExpanded] = useState(false);
  const [solutionExpanded, setSolutionExpanded] = useState(true);

  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);

  useEffect(() => {
    setProblemExpanded(false);
    setSolutionExpanded(true);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <section className="flex flex-col my-2 md:my-10 mx-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight md:leading-none mb-6 md:text-left">
          {title}
        </h1>
        {/* <p>
          <span style={{ color: mapColorDifficulty[difficulty] }}>
            {difficulty}
          </span>
        </p> */}
        <Accordion
          elevation={0}
          disableGutters
          square
          expanded={problemExpanded}
          onClick={() => setProblemExpanded(!problemExpanded)}
          className="dark:bg-slate-900"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white"/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="text-xl font-bold dark:text-white">Problem Statement</div>
          </AccordionSummary>
          <AccordionDetails>
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
          onClick={() => setSolutionExpanded(!solutionExpanded)}
          className="dark:bg-slate-900"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white"/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="text-xl font-bold dark:text-white">Show Solution</div>
          </AccordionSummary>
          <AccordionDetails>
            <article
              className="prose dark:prose-invert prose-slate text-black dark:text-slate-400"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            ></article>
          </AccordionDetails>
        </Accordion>
      </section>
    </>
  );
}
