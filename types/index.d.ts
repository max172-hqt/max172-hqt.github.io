export interface Post {
  id: string;
  title: string;
  link: string;
  topic: string;
  solution: string;
  problemId: string;
}

export interface PostData {
  id: string;
  link: string;
  title: string;
  topic: string;
  contentHtml: string;
}

export interface LeetcodeQuestionData {
  questionId: string;
  title: string;
  content: string;
  difficulty: "Easy" | "Medium" | "Hard";
}
