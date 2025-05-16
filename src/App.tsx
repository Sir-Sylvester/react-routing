import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ExploreRoutes from "./pages/ExploreRoutes";

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium px-3 py-1 rounded transition ${
      isActive ? " bg-red-100 text-red-500" : "text-blue-700 hover:bg-blue-100"
    }`;
  return (
    <nav className="flex gap-4 p-4 bg-white shadow-lg border-b sticky top-0 z-10 justify-end">
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
      <Navbar />
      <main className="max-w-2xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-lg border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
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
    </div>
  );
}

export default App;
