import { createUser } from "../api";
import { DASHBOARD_PAGE_URL, SESSION_USER_DATA_KEY } from "../constants";
import { IUserData } from "../constants/types";

export const register = async (
  userData: IUserData,
  redirect: (to: string) => void
) => {
  try {
    const newUser = await createUser(userData);

    if (newUser) {
      const { username, id } = newUser;
      sessionStorage.setItem(
        SESSION_USER_DATA_KEY,
        JSON.stringify({ username, id })
      );
      redirect(DASHBOARD_PAGE_URL);
    } else {
      console.error("Error during registration");
    }
  } catch (error) {
    console.error("Error during registration", error);
  }
};
