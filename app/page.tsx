import fs from "fs";
import PostCard from "./postcard/page";

export default function Home() {
  const posts: any[] = [];

  posts.push(...fs.readdirSync("./app/post")
  .filter((file: string) => file.endsWith(".json"))
  .map((file: string) => {
    return require(`./post/${file}`);
  }));

  function displayPosts() {
    const postTitles = posts
    .filter(post => post.title && post.body)
    .map((post, index) => {
      return (
        <PostCard key={index} post={post}/>
      );
    });
    return postTitles;
  }

  return (
    <main className="flex flex-col items-center justify-between p-5 gap-10">
      <h1>Available Posts</h1>
      {displayPosts()}
    </main>
  );
}
