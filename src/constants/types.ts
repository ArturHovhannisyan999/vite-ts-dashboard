export interface IUserData {
  username: string;
  password: string;
  newPassword?: string;
}

export interface IProductData {
  id: string;
  name: string;
  price: string;
  salePrice: string;
  createdAt: string;
}

export type AuthFormProps = {
  title: string;
  onSubmit: (userData: IUserData) => void;
  submitButtonText: string;
};

export type UserProductsItemProps = {
  product: IProductData;
};
