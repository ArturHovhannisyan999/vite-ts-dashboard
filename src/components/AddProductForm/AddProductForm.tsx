import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { addProduct } from "../../api";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_PAGE_URL, SESSION_USER_DATA_KEY } from "../../constants";
import { Link } from "react-router-dom";
import "./AddProductForm.css";

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    salePrice: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, price, salePrice } = productData;

    if (!name || !price || !salePrice) {
      setError("All fields are required");
      return;
    }

    const userId = JSON.parse(
      sessionStorage.getItem(SESSION_USER_DATA_KEY) || "{}"
    ).id;

    if (!userId) {
      setError("User not found in session.");
      return;
    }
    const replacedProductData = {
      ...productData,
      price: price + "$",
      salePrice: salePrice + "$",
    };
    try {
      await addProduct(userId, replacedProductData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="add-product-form"
      >
        <Box display="flex" justifyContent="flex-start">
          <Link to={DASHBOARD_PAGE_URL} className="add-product-form__link">
            &larr; Dashboard page
          </Link>
        </Box>
        <Typography variant="h5" component="h1" align="center">
          Add New Product
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <TextField
          label="Product Name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Sale Price"
          name="salePrice"
          type="number"
          value={productData.salePrice}
          onChange={handleChange}
          required
          fullWidth
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Product
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
