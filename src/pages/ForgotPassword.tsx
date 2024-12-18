import { AuthForm } from "../components/AuthForm/AuthForm";
import {
  FORGOT_PASSWORD_FORM_SUBMIT_TEXT,
  FORGOT_PASSWORD_FORM_TITLE,
} from "../constants";
import { IUserData } from "../constants/types";
import { changePassword } from "../helpers/changePassword";
import { useRedirect } from "../hooks/useRedirect";

export const ForgotPassword = () => {
  const { redirect } = useRedirect();
  const handleChangePassword = async (userData: IUserData) => {
    await changePassword(userData, redirect);
  };

  return (
    <AuthForm
      title={FORGOT_PASSWORD_FORM_TITLE}
      onSubmit={handleChangePassword}
      submitButtonText={FORGOT_PASSWORD_FORM_SUBMIT_TEXT}
    />
  );
};
