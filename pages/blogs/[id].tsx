import { getAllPostIds, getPostData } from "../../lib/posts"

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    console.log('hello', { params });
    const postData = getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export default function Post({postData}) {
    console.log(postData)
    return (
        <p>Post</p>
    )
}