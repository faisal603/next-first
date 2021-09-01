import Link from "next/link";
function Home() {
  return (
    <div>
      home page
      <div className="m-3">
        <Link href="/genres">
          <a className="button is-primary">genres SSG</a>
        </Link>
        <br />
        <br />
        <Link href="/posts">
          <a className="button is-primary">posts Blocking SSG</a>
        </Link>
        <br />
        <br />
        <Link href="/products">
          <a className="button is-primary">products SSR</a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
