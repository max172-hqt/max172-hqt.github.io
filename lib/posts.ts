import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import type { Post } from "../types";

type PostData = {
  id: string;
  [key: string]: any;
};

const postsDir = path.join(process.cwd(), "posts");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return {
      params: {
        id,
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(prism, { plugins: ["line-numbers"] })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getSortedData(): Post[] {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // const group

  return allPostsData
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((post) => ({
      ...post,
      link: post.link,
      topic: post.topic,
      problemId: post.title.substr(0, 4).replace(/^0+/, ""),
      title: post.title.substr(5),
      solution: `/leetcodes/${post.id}`,
    }));
}
