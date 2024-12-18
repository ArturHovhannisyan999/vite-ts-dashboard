import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Dashboard } from "./pages/Dashboard";
import {
  DASHBOARD_PAGE_URL,
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  FORGOT_PASSWORD_PAGE_URL,
  PRODUCTS_FORM_PAGE_URL,
  REGISTRATION_PAGE_URL,
} from "./constants";
import "./App.css";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path={HOME_PAGE_URL} element={<Home />} />
      <Route path={LOGIN_PAGE_URL} element={<Login />} />
      <Route path={REGISTRATION_PAGE_URL} element={<Registration />} />
      <Route path={FORGOT_PASSWORD_PAGE_URL} element={<ForgotPassword />} />
      <Route path={DASHBOARD_PAGE_URL} element={<Dashboard />} />
      <Route path={PRODUCTS_FORM_PAGE_URL} element={<AddProductForm />} />
    </Routes>
  );
}

export default App;
