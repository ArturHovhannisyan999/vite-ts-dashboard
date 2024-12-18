import { API_ORIGIN_URL, PRODUCTS_URL, USERID_QUERY_PARAM } from "../constants";

export const fetchProductsByUserId = async (userId: string) => {
  try {
    const response = await fetch(
      `${API_ORIGIN_URL}${PRODUCTS_URL}?${USERID_QUERY_PARAM}=${userId}`
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products", error);
  }
};
