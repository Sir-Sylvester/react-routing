import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <h2 className="text-4xl font-bold text-blue-700 mb-2">
        Welcome to Home Page
      </h2>
      <p className="text-gray-600 text-lg mb-4">
        This is a simple React routing demo project.
      </p>
      <Link
        to="/services"
        className="text-blue-600 underline hover:text-blue-800 text-lg"
      >
        Go to Services (text link)
      </Link>
      <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-gray-500 hover:text-blue-600 underline text-center"
      >
        React Docs
      </a>
      <button className="mt-4 hover:bg-blue-500 ">
        <Link to="/contact">
          Contact Us
        </Link>
      </button>
    </div>
  );
}
