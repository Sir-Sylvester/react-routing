import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id || typeof id !== "string") {
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <h2 className="text-2xl font-bold text-red-600">Invalid Service ID</h2>
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition-all duration-200 font-semibold"
        >
          Back to Services
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <h2 className="text-3xl font-bold text-purple-700 mb-2">
        Service: {id.charAt(0).toUpperCase() + id.slice(1)}
      </h2>
      <p className="text-gray-600">
        You are viewing details for{" "}
        <span className="font-semibold text-blue-600">{id}</span> service.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-red-300 text-white rounded-full shadow hover:bg-red-400 transition-all duration-200 font-semibold"
      >
        Go Back
      </button>
    </div>
  );
}
