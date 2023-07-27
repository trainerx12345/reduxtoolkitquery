import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-primary lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{" "}
              Not Found
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to="/"
              className="px-5 py-2 rounded-md text-blue-100 bg-primary hover:bg-secondary"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}