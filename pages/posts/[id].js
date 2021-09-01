const Post = ({ data }) => {
  return (
    <div>
      <div className="message is-link container mt-5">
        <div className="message-header">
          {data.id}
          <h1 className="is-size-3">{data.title}</h1>
        </div>
        <div className="message-body has-text-centered">{data.body}</div>
      </div>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  //   const my = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await my.json();

  //   const paths = data.map((p) => {
  //     return {
  //       params: {
  //         id: `${p.id}`,
  //       },
  //     };
  //   });

  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: {
      data: post,
    },
  };
}
