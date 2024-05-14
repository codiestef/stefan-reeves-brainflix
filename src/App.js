import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/aNavbar/Navbar";
import VideoDetailPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import UploadPage from "./pages/VideoUploadPage/UploadPage";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<VideoDetailPage />} />
          <Route path="/videos/:id" element={<VideoDetailPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;