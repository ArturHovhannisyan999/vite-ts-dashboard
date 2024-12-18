import { API_ORIGIN_URL, USERNAME_QUERY_PARAM, USERS_URL } from "../constants";

export const fetchUserByUsername = async (username: string) => {
  try {
    const response = await fetch(
      `${API_ORIGIN_URL}${USERS_URL}?${USERNAME_QUERY_PARAM}=${username}`
    );
    const users = await response.json();

    if (users.length > 0) {
      return users[0];
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error during login", error);
  }
};
