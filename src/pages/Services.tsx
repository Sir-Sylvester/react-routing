import { Link, Outlet, useLocation } from "react-router-dom";

const serviceIds = ["freelancing", "consulting", "training"];

export default function Services() {
  const location = useLocation();
  const isDetail = /\/services\/.+/.test(location.pathname);
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      {!isDetail && (
        <>
          <h2 className="text-4xl font-bold text-blue-700 mb-2">
            Welcome to Services Page
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Explore our awesome services below.
          </p>
          <div className="flex gap-4 mb-4">
            {serviceIds.map((id) => (
              <Link
                key={id}
                to={id}
                className="px-4 py-2 bg-red-300 text-white rounded-full shadow hover:scale-105 hover:bg-red-400  transition-all duration-200 font-semibold"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>
          <Link
            to="/"
            className="text-blue-600 underline hover:text-blue-800 text-lg"
          >
            Back to Home
          </Link>
        </>
      )}
      <div className="w-full mt-8">
        <Outlet />
      </div>
    </div>
  );
}
