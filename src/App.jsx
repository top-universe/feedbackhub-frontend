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
import Section7 from "./pages/Section7";
import Section8 from "./pages/Section8";


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="test" element={<FunTestPage />} />
        <Route path="forgot-password" element={<ForgetPassword/>} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="reset-password-successful" element={<ResetSuccessful />} />
        <Route path="email-verification" element={<EmailVerification />} />
        <Route path="email-verification-successful" element={<EmailSuccessful />} />
        <Route path="section7" element={<Section7 />} />
        <Route path="section8" element={<Section8 />} />

        <Route path="*" element={<NoPage />} />


      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

