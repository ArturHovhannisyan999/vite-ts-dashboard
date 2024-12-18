import UserProducts from "../components/UserProducts/UserProducts";
import { logout } from "../helpers/logout";
import { useRedirect } from "../hooks/useRedirect";

export const Dashboard = () => {
  const { redirect } = useRedirect();
  const handleLogout = () => {
    logout(redirect);
  };
  return (
    <section>
      <h1>Dashboard Page</h1>
      <UserProducts />
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};
