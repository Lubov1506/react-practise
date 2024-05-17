import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md backdrop-blur p-10 border-2 rounded-2xl border-slate-300 shadow-xl">
          <h1 className="mb-5 text-5xl font-bold">Sorry...</h1>
          <p className="mb-5 text-2xl">
            Sorry, we couldn&apos;t find this page!
          </p>
          <Link to='/' className="btn btn-primary">Go home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
