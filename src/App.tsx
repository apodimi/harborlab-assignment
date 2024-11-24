import { Search } from "./pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
