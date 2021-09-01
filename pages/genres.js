const Genres = ({ names }) => {
  return (
    <div>
      {names.map((e) => (
        <div className="message is-link container m-5 column is-2" key={e._id}>
          <div className="message-body">{e.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Genres;

export async function getStaticProps() {
  const res = await fetch("https://movie-prj123.herokuapp.com/api/genres");
  const result = await res.json();
  return {
    props: {
      names: result,
    },
  };
}
