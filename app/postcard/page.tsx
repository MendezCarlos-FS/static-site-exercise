import Link from "next/link";

export default function PostCard(props: any) {
    const title = props.post?.title;

    function createMarkup() {
        return {__html: title};
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