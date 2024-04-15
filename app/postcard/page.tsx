import Link from "next/link";

export default function PostCard(props: any) {
    console.log(props);
    return (
        <Link href={{
            pathname: "/post",
            query: props.post
        }}>
            <h3>{props.post?.title}</h3>
        </Link>
    )
}