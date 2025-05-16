import { useParams, useNavigate } from "react-router-dom";

export default function ExploreDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <h2 className="text-2xl font-bold text-red-600">Wrong ID provided</h2>
        <button
          onClick={() => navigate("/explore")}
          className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition-all duration-200 font-semibold"
        >
          Back to Explore
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-6 py-12 ">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">Explore: {id}</h2>
      <p className="text-gray-600">
        You are viewing details for{" "}
        <span className="font-semibold text-blue-600">{id}</span>.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-red-300 text-white rounded-full shadow hover:scale-105 hover:bg-red-400 transition-all duration-200 font-semibold"
      >
        Go Back
      </button>
    </div>
  );
}
