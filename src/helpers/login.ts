import { fetchUserByUsername } from "../api";
import { DASHBOARD_PAGE_URL, SESSION_USER_DATA_KEY } from "../constants";
import { IUserData } from "../constants/types";

export const login = async (
  userData: IUserData,
  redirect: (to: string) => void
) => {
  try {
    const user = await fetchUserByUsername(userData.username);

    if (user.password === userData.password) {
      const { username, id } = user;
      sessionStorage.setItem(
        SESSION_USER_DATA_KEY,
        JSON.stringify({ username, id })
      );
      redirect(DASHBOARD_PAGE_URL);
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error during login", error);
  }
};
