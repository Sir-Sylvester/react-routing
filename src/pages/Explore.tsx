import { Link, Route, Routes } from "react-router-dom";
import ExploreDetail from "./ExploreDetail";

const exploreIds = ["Frontend", "Backend", "DevOps"];

export default function Explore() {
  const defaultPage = (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">Explore Page</h2>
      <p className="text-gray-600 mb-4">Select an ID to view its details:</p>
      <div className="flex gap-4">
        {exploreIds.map((id) => (
          <Link
            key={id}
            to={`/explore/${id}`}
            className="px-6 py-2 bg-red-300 text-white rounded-full shadow hover:scale-105 hover:bg-red-400 transition-all duration-200 font-semibold"
          >
            {id}
          </Link>
        ))}
      </div>
      <a
        href="https://unsplash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 text-blue-500  hover:text-blue-700  "
      >
        Find amazing pictures here
      </a>
    </div>
  );



  return (
    <div className="flex flex-col items-center gap-6">
      <Routes>
        <Route index element={defaultPage} />
        <Route path="/exploredetail" element={<ExploreDetail />} />
      </Routes>
    </div>
  );
}