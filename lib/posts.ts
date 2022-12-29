import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export function getPostData(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContents);
  return {
    id,
    ...matterResult.data
  };
} 

export function getSortedData() {
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

  return allPostsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    return -1;
  });
}
