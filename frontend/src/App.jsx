import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QA from "./pages/QA";
import BookDetail from "./pages/BookDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
