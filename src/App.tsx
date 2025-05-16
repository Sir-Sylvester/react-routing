import { Suspense, lazy, Component } from "react";
import type { ReactNode } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import ExploreDetail from "./pages/ExploreDetail";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: unknown;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      let message = "Unknown error";
      if (this.state.error instanceof Error) {
        message = this.state.error.message;
      } else if (typeof this.state.error === "string") {
        message = this.state.error;
      }
      return (
        <div className="text-center text-red-600 font-bold py-12">
          Something went wrong: {message}
        </div>
      );
    }
    return this.props.children;
  }
}

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Explore = lazy(() => import("./pages/Explore"));

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium px-3 py-1 rounded transition ${
      isActive ? " bg-red-50 text-red-500" : "text-blue-700 hover:bg-red-50"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-200  ">
      <ErrorBoundary>
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/*" element={<Services />}>
                <Route path=":id" element={<ServiceDetail />} />
              </Route>
              <Route path="/explore" element={<Explore />} />
              <Route path="/explore/:id" element={<ExploreDetail />} />
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
      </ErrorBoundary>
    </div>
  );
}

export default App;
