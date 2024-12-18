import { HOME_PAGE_URL, SESSION_USER_DATA_KEY } from "../constants";

export const logout = (redirect: (to: string) => void) => {
  sessionStorage.removeItem(SESSION_USER_DATA_KEY);
  redirect(HOME_PAGE_URL);
};
