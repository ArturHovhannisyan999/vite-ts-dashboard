import { LOGIN_PAGE_URL } from "../constants";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <p>
        <Link to={LOGIN_PAGE_URL}>Go to Login Page</Link>.
      </p>
    </section>
  );
};
