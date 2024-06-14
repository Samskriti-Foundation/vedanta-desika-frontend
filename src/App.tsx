import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import InfoPage from "./pages/info/InfoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/info/:page_id" element={<InfoPage/>} />
    </Routes>
  )
}
