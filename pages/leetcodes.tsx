import { getSortedData } from "../lib/posts";
import styles from "./leetcodes.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Launch, LightbulbOutlined } from "@mui/icons-material";
import Head from "next/head";

export async function getStaticProps() {
  const allPostData = getSortedData();
  return {
    props: {
      allPostData,
    },
  };
}

function ProblemTable({ posts }: { posts: any }) {
  return (
    <>
      <Head>
        <title>Max Tran - Leetcodes</title>
      </Head>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 12 }}>ID</TableCell>
              <TableCell>Problems</TableCell>
              <TableCell align="center" sx={{ width: 12 }}>
                Solution
              </TableCell>
              <TableCell align="center" sx={{ width: 12 }}>
                Link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post: any) => (
              <TableRow
                key={post.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.problemId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {post.title}
                </TableCell>
                <TableCell align="center">
                  <IconButton component={Link} href={post.solution}>
                    <LightbulbOutlined />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton component={Link} href={post.link}>
                    <Launch />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default function Leetcodes({ allPostData }: { allPostData: any }) {
  return (
    <div className={styles.container}>
      <h2>Leetcode Problems</h2>
      <p>
        Besides web development, I also love to study and solve Data Structure
        and Algorithms problems to be better at problem solving, communication
        skills, and to be a better software engineer. Here is a selected list of
        problems that I have solved, along with my thought process and
        solutions. The list of problems I posted here is heavily influenced by{" "}
        <a href="https://neetcode.io/practice">neetcode.com</a>. Check him out!
      </p>
      <p>
        The articles are mainly for me to reference to later, so they are far
        from being as comprehensive as the official solutions on Leetcode.
        However, I will try my best to be as clear as possible!
      </p>
      <ProblemTable posts={allPostData} />
    </div>
  );
}
