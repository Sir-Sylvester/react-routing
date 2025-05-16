import { Suspense, lazy } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const ExploreRoutes = lazy(() => import("./pages/ExploreRoutes"));

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium px-3 py-1 rounded transition ${
      isActive ? " text-red-50" : "text-blue-700 hover:bg-blue-100"
    }`;
  return (
    <nav className="flex gap-4 p-4 bg-white shadow-lg border-b sticky top-0 z-10">
      <NavLink to="/" className={navLinkClass} end>
        Home
      </NavLink>
      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>
      <NavLink to="/services" className={navLinkClass}>
        Services
      </NavLink>
      <NavLink to="/explore" className={navLinkClass}>
        Explore
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 w-screen ">
      <Suspense
        fallback={
          <div className="text-center text-blue-500 text-xl font-semibold py-12">
            Loading...
          </div>
        }
      >
        <Navbar />
        <main className="max-w-2xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-lg border">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>loading..</div>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
             path="/services"
              element={
              <Suspense fallback= {<div>loading..</div>}>
               <Services />
               </Suspense>
              }
              />
            <Route path="/explore/*" element={<ExploreRoutes />} />
            <Route path="/go-home" element={<Navigate to="/" replace />} />
            <Route
              path="*"
              element={
                <div className="text-center text-red-500 font-bold text-xl">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
        <footer className="text-center text-gray-500 py-6 mt-12">
          &copy; {new Date().getFullYear()} React Routing Demo. All rights
          reserved.
        </footer>
      </Suspense>
    </div>
  );
}

export default App;
