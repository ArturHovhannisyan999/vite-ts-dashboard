import { API_ORIGIN_URL, USERID_QUERY_PARAM, USERS_URL } from "../constants";
import { IUserData } from "../constants/types";

export const updatePassword = async (userData: IUserData) => {
  try {
    const response = await fetch(
      `${API_ORIGIN_URL}${USERS_URL}?${USERID_QUERY_PARAM}=${userData.username}`
    );
    const users = await response.json();

    if (users.length === 0) {
      console.error("User not found");
      return null;
    }

    const user = users[0];
    const updatedUser = { ...user, password: userData.newPassword };

    const updateResponse = await fetch(
      `${API_ORIGIN_URL}${USERS_URL}/${user.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      }
    );

    if (updateResponse.ok) {
      return await updateResponse.json();
    } else {
      console.error("Failed to update user");
    }
  } catch (error) {
    console.error("Error during password update", error);
  }
};
