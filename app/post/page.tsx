'use client'
export default function Post({searchParams}: { searchParams: { title: string, body: string } }) {
    let title = searchParams.title.trim();
    let body = searchParams.body.trim();

    function createMarkup() {
        return {__html: title+body};
    }

    return (
        <article className="flex flex-col items-center justify-between p-10 gap-5"
            dangerouslySetInnerHTML={createMarkup()}/>
    );
}