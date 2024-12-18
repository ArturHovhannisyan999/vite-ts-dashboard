import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigate = useNavigate();

  const redirect = (to: string) => {
    navigate(to);
  };

  return { redirect };
};
