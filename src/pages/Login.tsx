import { AuthForm } from "../components/AuthForm/AuthForm";
import { LOGIN_FORM_SUBMIT_TEXT, LOGIN_FORM_TITLE } from "../constants";
import { IUserData } from "../constants/types";
import { login } from "../helpers/login";
import { useRedirect } from "../hooks/useRedirect";

export const Login = () => {
  const { redirect } = useRedirect();
  const handleLogin = async (userData: IUserData) => {
    login(userData, redirect);
  };

  return (
    <AuthForm
      title={LOGIN_FORM_TITLE}
      onSubmit={handleLogin}
      submitButtonText={LOGIN_FORM_SUBMIT_TEXT}
    />
  );
};
