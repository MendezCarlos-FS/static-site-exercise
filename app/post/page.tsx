'use client'
import { useRouter } from "next/navigation";

export default function Post({searchParams}: { searchParams: { title: string, body: string } }) {
    const router = useRouter();
    console.log(searchParams);
    // const title = props.post?.title;
    // const body = props.post?.body;
    let title = searchParams.title;
    let body = searchParams.body;

    return (
        <article className="flex flex-col items-center justify-between p-2">
            <h2>{title}</h2>
            <p>{body}</p>
        </article>
    );
}