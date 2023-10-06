import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FunTestPage from "./pages/FunTestPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="test" element={<FunTestPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
