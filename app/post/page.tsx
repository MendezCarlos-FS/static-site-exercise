'use client'

import { useSearchParams } from "next/navigation";

export default function Post() {
    const searchParams = useSearchParams();

    let title = searchParams.get("title")?.trim() || "";
    let body = searchParams.get("body")?.trim() || "";

    function createMarkup(): {__html: string} {
        return {__html: `<div>${title+body}</div>`};
    }

    return (
        <article className="flex flex-col items-center justify-between p-10 gap-5"
            dangerouslySetInnerHTML={createMarkup()}/>
    );
}