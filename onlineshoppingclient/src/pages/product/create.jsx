import React, { useState } from "react";

function Create() {

  const [product, setProduct] = useState({
    productName: "",
    price: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const createProduct = async () => {

    await fetch("https://localhost:44317/api/ProductApi", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),

    });

    alert("Product Added");
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    createProduct();
  };

  return (

     <div className="flex-1 transition-all duration-300 bg-[#F3F5F7] px-3 h-full overflow-hidden">
      <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex flex-col items-center">
      <div className="p-5 w-full">

    <h1 className="text-2xl font-bold mb-5">
      Add Product
    </h1>

    <form onSubmit={handleSubmit}>

<label>Enter your name:
        <input
        type="text"
        name="productName"
        placeholder="Product Name"
        value={product.productName}
        onChange={handleChange}
      />
      </label>
      

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />

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