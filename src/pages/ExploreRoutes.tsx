import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

const exploreIds = ["Frontend", "Backend", "DevOps"];

function ExploreList() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">Explore Page</h2>
      <p className="text-gray-600 mb-4">Select an ID to view its details:</p>
      <div className="flex gap-4"
      >
        {exploreIds.map((id) => (
          <Link
            key={id}
            to={id}
            className="px-6 py-2 bg-blue-50 text-white rounded-full shadow hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold"
          >
            {id}
          </Link>
        ))}
      </div>
      <a
        href="https://reactrouter.com/en/main"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-blue-500 underline hover:text-blue-700"
      >
        Learn more about React Router
      </a>
    </div>
  );
}

function ExploreDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-purple-]]700 mb-2">Explore: {id}</h2>
      <p className="text-gray-600">
        You are viewing details for{" "}
        <span className="font-semibold text-blue-600">{id}</span>.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-gray-400 text-white rounded-full shadow hover:bg-gray-600 transition-all duration-200 font-semibold"
      >
        Go Back
      </button>
    </div>
  );
}

export default function ExploreRoutes() {
  return (
    <Routes>
      <Route index element={<ExploreList />} />
      <Route path=":id" element={<ExploreDetail />} />
    </Routes>
  );
}
