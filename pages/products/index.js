const Products = ({ gen }) => {
  return (
    <div className="container">
      {gen.map((e) => (
        <div className="box is-size-4" key={e._id}>
          {e.name}
        </div>
      ))}
    </div>
  );
};

export default Products;

export async function getServerSideProps() {
  const prod = await fetch("https://movie-prj123.herokuapp.com/api/genres");
  const res = await prod.json();

  return {
    props: {
      gen: res,
    },
  };
}
