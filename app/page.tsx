import Post from "./post/page";

const fs = require("fs");

export default function Home() {
  const posts: any[] = [];

  posts.push(...fs.readdirSync("./app/post")
  .filter((file: string) => file.endsWith(".json"))
  .map((file: string) => {
    return require(`./post/${file}`);
  }));

  function displayPosts() {
    console.log("POST");
    const postTitles = posts.map(post => {
      return (
        <h3>{post.title}</h3>
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
