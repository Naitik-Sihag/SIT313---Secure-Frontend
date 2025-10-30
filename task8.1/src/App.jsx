import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewPost from "./pages/NewPost";
import FindQuestions from "./pages/FindQuestions";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md py-4 mb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                New Post
              </Link>
              <Link
                to="/find"
                className="px-4 py-2 rounded-lg bg-white text-gray-700 border hover:bg-gray-50"
              >
                Find Questions
              </Link>
            </div>
          </div>
        </nav>
        
        <div className="max-w-6xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<NewPost />} />
            <Route path="/find" element={<FindQuestions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}