import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <h2 className="text-4xl font-bold text-blue-700 mb-2">
        Welcome to Contact Us Page
      </h2>
      <p className="text-gray-600 text-lg mb-4">
        We would love to hear from you!
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
