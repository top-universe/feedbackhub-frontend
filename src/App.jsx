import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FunTestPage from "./pages/FunTestPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NoPage from "./pages/NoPage";
import ForgetPassword from "./pages/ForgetPassword";
import SignUpPage from "./pages/SignUpPage";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccessful from "./pages/ResetSuccessful";
import EmailVerification from "./pages/EmailVerification";
import EmailSuccessful from "./pages/EmailSuccessful";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="test" element={<FunTestPage />} />
        <Route path="auth/forget-password" element={<ForgetPassword/>} />
        <Route path="auth/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="auth/reset-password" element={<ResetPassword />} />
        <Route path="auth/reset-successful" element={<ResetSuccessful />} />
        <Route path="auth/email-verification" element={<EmailVerification />} />
        <Route path="auth/email-successful" element={<EmailSuccessful />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
