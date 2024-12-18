import { useEffect, useState } from "react";
import { IProductData } from "../../constants/types";
import { SESSION_USER_DATA_KEY } from "../../constants";
import { fetchProductsByUserId } from "../../api";
import { UserProductsItem } from "../UserProductsItem/UserProductsItem";
import "./UserProductsList.css";

export const UserProductsList = () => {
  const [products, setProducts] = useState<IProductData[]>([]);

  useEffect(() => {
    const userId = JSON.parse(
      sessionStorage.getItem(SESSION_USER_DATA_KEY) || "{}"
    ).id;
    if (userId) {
      const getProducts = async () => {
        const products = await fetchProductsByUserId(userId);
        setProducts(products);
      };
      getProducts();
    }
  }, []);

  return products.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Sale Price</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <UserProductsItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  ) : (
    <p>Here will be all your products, too add product click button below</p>
  );
};
