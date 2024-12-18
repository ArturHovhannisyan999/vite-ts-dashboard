import { API_ORIGIN_URL, PRODUCTS_URL } from "../constants";
import { IProductData } from "../constants/types";
import { formatDate } from "../helpers/formatDate";

export const addProduct = async (
  userId: string,
  productData: Partial<IProductData>
) => {
  try {
    const newProduct = {
      ...productData,
      userId: userId,
      createdAt: formatDate(new Date()),
    };
    const response = await fetch(`${API_ORIGIN_URL}${PRODUCTS_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Error adding product");
    }
  } catch (error) {
    console.error("Error adding product", error);
  }
};
