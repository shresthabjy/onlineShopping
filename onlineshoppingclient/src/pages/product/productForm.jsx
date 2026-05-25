// CategoryLayout.jsx
function ProductForm({
  title,
  description,
  breadcrumb,
  product,
  category,
  productFeature,
  error,
  handleChange,
  handleImageChange,
  handleSubmit,
  submitText,
  cancelAction
}) {

  return (

     <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] p-6 shadow-sm h-full  w-full overflow-auto">
        <div className="flex justify-between items-start ">
          <div className="flex-1 p-2 overflow-auto">
            {/* Breadcrumb */}
            <div
              className="
                bg-gray-100
                text-gray-700
                px-3 py-3
                rounded-lg
                text-sm
                mb-6
              "
            >
              {breadcrumb}
            </div>
            {/* Page Title */}

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full overflow-auto">
              {/* Card Header */}
              <div className="border-b border-gray-200 px-8 py-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Category Information
                </h2>
                <p className="text-gray-500 mt-1">
                  Fill in the details below
                </p>
              </div>
              {/* Card Body */}
              <div className="p-8">

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={product.productName || ""}
                    onChange={handleChange}
                    placeholder="Enter Product name"
                    className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">
                      {error}
                    </p>
                  )}
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Category
                  </label>
                  <select
                    name="categoryId"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={product.categoryId || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    {category.map((item) => (
                      <option
                        key={item.categoryId}
                        value={item.categoryId}
                      >
                        {item.categoryName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <br></br>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Product Quantity */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Quantity
                  </label>

                  <input
                    type="number"
                    name="quantity"
                    value={product.quantity || ""}
                    onChange={handleChange}
                    placeholder="Enter Product quantity"
                    className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                    step="1"
                    inputMode="numeric"
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">
                      {error}
                    </p>
                  )}

                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={product.price || ""}
                    onChange={handleChange}
                    placeholder="Enter Product price"
                    className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">
                      {error}
                    </p>
                  )}
                </div>
              </div>

              <br></br>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Feature */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Product Feature
                  </label>
                  <select
                    name="productFeatureId"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={product.productFeatureId || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select Product Feature</option>
                    {productFeature.map((item) => (
                      <option
                        key={item.productFeatureId}
                        value={item.productFeatureId}
                      >
                        {item.productFeatureName}
                      </option>
                    ))}
                  </select>

                </div>
                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Status
                      </label>

                      <select
                        className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                        name="isActive"
                        value={product.isActive}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: "isActive",
                              value: e.target.value === "true"
                            }
                          })
                        }
                      >
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>

                </div>
              </div>

              <br></br>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Name */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 ">
                    Product Image
                  </label>

                  <input
                  className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                    type="file"
                    name="productImage"
                    onChange={handleImageChange}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">
                      {error}
                    </p>
                  )}

                </div>
              </div>
              <br></br>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Description
                </label>

                <textarea
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Enter Product Description"
                  className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2">
                    {error}
                  </p>
                )}

              </div>

              {/* Buttons */}
              <div className="mt-10 flex gap-4">
                <button
                  className="
                        bg-blue-500 hover:bg-blue-600 text-white
                        px-6 py-3 rounded-xl font-medium transition
                      "
                  type="submit"
                >
                  {submitText}
                </button>

                <button
                  type="button"
                  onClick={cancelAction}
                  className="
                        bg-red-500 hover:bg-red-600 text-white
                        px-6 py-3 rounded-xl font-medium transition
                      "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ProductForm;