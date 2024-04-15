export default function Post(props: any) {
    const title = props.post?.title;
    const body = props.post?.body;

    return (
        <article>
            <h2 className="flex flex-col items-center justify-between p-24">{title}</h2>
            <p>{body}</p>
        </article>
    );
}