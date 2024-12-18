import { PRODUCTS_FORM_PAGE_URL } from "../../constants";
import { useRedirect } from "../../hooks/useRedirect";
import { UserProductsList } from "../UserProductsList/UserProductsList";
import "./UserProducts.css";

const UserProducts = () => {
  const { redirect } = useRedirect();

  return (
    <div>
      <h2>Products</h2>
      <UserProductsList />
      <button
        className="add-new-product-btn"
        onClick={() => redirect(PRODUCTS_FORM_PAGE_URL)}
      >
        Add new product
      </button>
    </div>
  );
};

export default UserProducts;
