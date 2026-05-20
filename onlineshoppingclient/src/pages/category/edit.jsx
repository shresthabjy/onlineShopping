import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initialCategoryState } from "./categoryModel";
import CategoryForm from "./categoryForm";
import { toast } from "react-toastify";

function Edit() {
  const navigate = useNavigate();
  //getting id from edit button
  const { id } = useParams();
  //setting db attribute default 
  const [category, setCategory] = useState(initialCategoryState);

  //getting/saving data of category
  useEffect(() => {
    fetchCategory();
  }, []);
  const [error, setError] = useState("");

  //getting data of category from api
  const fetchCategory = async () => {

    const response = await fetch(
      `https://localhost:44317/api/categoryapi/${id}`
    );

    const data = await response.json();

    setCategory(data);
  };

  //
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    setCategory({
      ...category,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (category.categoryName.trim().length < 3) {
      setError("Category name must be at least 3 characters");
      return;
    }
    setError("");
    updateCategory();
  };

  const updateCategory = async () => {
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
    navigate("/category");
  };

  return (
    <CategoryForm
      title="Update Category"
      description="Edit category to organize your products."
      breadcrumb="Dashboard / Categories / Edit Category"
      category={category}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitText="Update Category"
      cancelAction={() => navigate("/category")}
    />
  );
}
export default Edit;