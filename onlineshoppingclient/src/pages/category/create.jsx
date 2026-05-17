import React, { useState } from "react";

function Create() {

  const [category, setCategory] = useState({
  categoryId: 0,
  categoryName: "",
  isActive: false,
  isDelete: false
});

  const handleChange = (e) => {

    const { name, value } = e.target;

    setCategory({
      ...category,
      [name]: value,
    });
  };

  const createCategory = async () => {

    await fetch("https://localhost:44317/api/categoryapi", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(category),

    });

    alert("Category Added");
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    createCategory();
  };

  return (

     <div className="flex-1 transition-all duration-300 bg-[#F3F5F7] px-3 h-full overflow-hidden">
      <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex flex-col items-center">
      <div className="p-5 w-full">

    <h1 className="text-2xl font-bold mb-5">
      Add Category Checkwd
    </h1>

    <form onSubmit={handleSubmit}>

<label>Enter your name:
        <input
        type="text"
        name="categoryName"
        placeholder="Category Name"
        value={category.categoryName}
        onChange={handleChange}
      />
      </label>
      <br></br>
<label>
  Is Active:

  <input
    type="checkbox"
    name="isActive"
    checked={category.isActive}
    onChange={(e) =>
      setCategory({
        ...category,
        isActive: e.target.checked
      })
    }
  />
</label>
      <button type="submit">
        Save
      </button>

    </form>

    </div>
      </div>
    </div>

    
  );
}

export default Create;