import Link from "next/link";

export default function PostCard(props: any) {
    const title = props.post?.title;

    function createMarkup(): {__html: string} {
        return {__html: `<div>${title}</div>`};
    }

    return (
        <Link className="border-2 border-black rounded p-5"
            href={{
                pathname: "/post",
                query: props.post
            }}
        dangerouslySetInnerHTML={createMarkup()}/>
    )
}