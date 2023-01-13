import { getSortedData } from "../lib/posts";
import styles from "./leetcodes.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { dividerClasses, IconButton } from "@mui/material";
import {
  Launch,
  LightbulbOutlined,
} from "@mui/icons-material";

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
    <TableContainer component={Paper}>
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
  );
}

export default function Leetcodes({ allPostData }: { allPostData: any }) {
  return (
    <div className={styles.container}>
      <h2>Leetcode Problems</h2>
      <ProblemTable posts={allPostData} />
    </div>
  );
}
