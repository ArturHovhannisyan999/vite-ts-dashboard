import { LOGIN_PAGE_URL } from "../constants";
import { IUserData } from "../constants/types";
import { updatePassword } from "../api";

export const changePassword = async (
  userData: IUserData,
  redirect: (to: string) => void
) => {
  try {
    const updatedUser = await updatePassword(userData);
    if (userData.password !== userData.newPassword)
      alert("New password does not match");
    if (updatedUser) {
      alert("Password successfully changed");
      redirect(LOGIN_PAGE_URL);
    }
  } catch (error) {
    console.error("Error during password change", error);
    alert("Error during password change");
  }
};
