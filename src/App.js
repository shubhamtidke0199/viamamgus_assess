import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Video from "./pages/Video";
import Date from "./pages/Date";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/video" element={<Video />} />
        <Route path="/date" element={<Date />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
