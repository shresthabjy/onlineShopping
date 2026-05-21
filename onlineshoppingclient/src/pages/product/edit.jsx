import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initialProductState } from "./productModel";
import ProductForm from "./productForm";
import { toast } from "react-toastify";

function Edit() {
  const navigate = useNavigate();
  //getting id from edit button
  const { id } = useParams();
  //setting db attribute default 
  const [product, setProduct] = useState(initialProductState);

  //getting/saving data of product
  useEffect(() => {
    fetchProduct();
  }, []);
  const [error, setError] = useState("");

  //getting data of category from api
  const fetchProduct = async () => {

    const response = await fetch(
      `https://localhost:44317/api/productapi/${id}`
    );

    const data = await response.json();

    setProduct(data);
  };

  //
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    setproduct({
      ...product,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (product.ProductName.trim().length < 3) {
      setError("Product name must be at least 3 characters");
      return;
    }
    setError("");
    updateProduct();
  };

  const updateProduct = async () => {
    const response = await fetch(
      `https://localhost:44317/api/categoryapi/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
      }
    );

    if (!response.ok) {

      const errorMessage = await response.text();

      setError(errorMessage);
      return;
    }
    toast.success("Updated successfully");
    navigate("/product");
  };

  return (
    <ProductForm
      title="Update Product"
      description="Edit product to organize your products."
      breadcrumb="Dashboard / Categories / Edit Category"
      product={product}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitText="Update Product"
      cancelAction={() => navigate("/Product")}
    />
  );
}
export default Edit;