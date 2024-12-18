import { AuthForm } from "../components/AuthForm/AuthForm";
import {
  REGISTRATION_FORM_SUBMIT_TEXT,
  REGISTRATION_FORM_TITLE,
} from "../constants";
import { IUserData } from "../constants/types";
import { register } from "../helpers/register";
import { useRedirect } from "../hooks/useRedirect";

export const Registration = () => {
  const { redirect } = useRedirect();
  const handleRegistration = async (userData: IUserData) => {
    register(userData, redirect);
  };

  return (
    <AuthForm
      title={REGISTRATION_FORM_TITLE}
      onSubmit={handleRegistration}
      submitButtonText={REGISTRATION_FORM_SUBMIT_TEXT}
    />
  );
};
