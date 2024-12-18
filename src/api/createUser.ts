import { API_ORIGIN_URL, USERS_URL } from "../constants";
import { IUserData } from "../constants/types";

export const createUser = async (userData: IUserData) => {
  try {
    const response = await fetch(`${API_ORIGIN_URL}${USERS_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    });

    if (response.ok) {
      const newUser = await response.json();
      return newUser;
    } else {
      console.error("Error during registration");
    }
  } catch (error) {
    console.error("Error during registration", error);
  }
};
