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
    const postTitles = posts.map((post, index) => {
      return (
        <PostCard key={index} post={post}/>
      );
    });
    return postTitles;
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>This is the home page.</h1>
      {displayPosts()}
    </main>
  );
}
