import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <h2 className="text-4xl font-bold text-blue-700 mb-2">
        Welcome to Services Page
      </h2>
      <p className="text-gray-600 text-lg mb-4">
        Explore our awesome services below.
      </p>
      <Link
        to="/"
        className="text-blue-600 underline hover:text-blue-800 text-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
