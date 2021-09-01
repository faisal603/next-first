import Link from "next/link";
const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((p) => (
        <div className=" message is-link container mt-5" key={p.id}>
          <b className="message-header">{p.id}</b>
          <div className="message-body has-text-centered">
            <Link href={`posts/${p.id}`} passHref>
              <h1 className="is-size-3">{p.title}</h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const my = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await my.json();

  return {
    props: {
      posts: data,
    },
  };
}
