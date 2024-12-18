import { UserProductsItemProps } from "../../constants/types";
import "./UserProductsItem.css";

export const UserProductsItem: React.FC<UserProductsItemProps> = ({
  product,
}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.salePrice}</td>
      <td>{product.createdAt}</td>
    </tr>
  );
};
