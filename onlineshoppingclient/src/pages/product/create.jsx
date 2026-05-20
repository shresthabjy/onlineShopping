import React, { useState } from "react";
import ProductForm from "./productForm";
import { productService } from "../../services/productService";
import { initialProductState } from "./productModel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
  const [product, setProduct] = useState(initialProductState);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //for toasting message
  const navigate = useNavigate();

  const createProduct = async () => {
    try {
      await productService.create(product);
      toast.success("product created successfully");
      navigate("/product");

    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product.ProductName.trim().length < 3) {
      setError("product name must be at least 3 characters");
      return;
    }
    setError("");
    await createCategory();
  };
  const resetForm = () => {

    setCategory(initialProductState);

    setError("");
  };


  return (
    <ProductForm
      title="Add New product"
      description="Create a new product to organize your products."
      breadcrumb="Dashboard / Product / Add product"
      product={product}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitText="Save product"
      cancelAction={resetForm}
    />
  );
}
export default Create;