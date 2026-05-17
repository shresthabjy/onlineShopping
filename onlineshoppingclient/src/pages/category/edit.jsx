import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Edit() {


const { id } = useParams();

const [category, setCategory] = useState({
  categoryId: 0,
  categoryName: "",
  isActive: false,
  isDelete: false
});


useEffect(() => {
  fetchCategory();
}, []);

const fetchCategory = async () => {

  const response = await fetch(
    `https://localhost:44317/api/categoryapi/${id}`
  );

  const data = await response.json();

  setCategory(data);
};
const handleChange = (e) => {

  const { name, value, type, checked } = e.target;

  setCategory({
    ...category,
    [name]: type === "checkbox" ? checked : value
  });
};

const handleSubmit = (e) => {

  e.preventDefault();

  updateCategory();
};

const updateCategory = async () => {

  await fetch(
    `https://localhost:44317/api/categoryapi/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    }
  );

  alert("Updated");
};

return (

     <div className="flex-1 transition-all duration-300 bg-[#F3F5F7] px-3 h-full overflow-hidden">
      <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex flex-col items-center">
      <div className="p-5 w-full">

    <h1 className="text-2xl font-bold mb-5">
      Add Category Checkwd
    </h1>

    <form onSubmit={updateCategory}>

<label>Enter your name:
        <input
  type="text"
  name="categoryName"
  value={category.categoryName}
  onChange={handleChange}
/>
      </label>
      <br></br>
<label>
  Is Active:

  <input
  type="checkbox"
  checked={category.isActive}
  onChange={(e) =>
    setCategory({
      ...category,
      isActive: e.target.checked
    })
  }
/>
</label>
      <br></br>

      <button type="submit">
        Update
      </button>

    </form>

    </div>
      </div>
    </div>

    
  );
}

export default Edit;