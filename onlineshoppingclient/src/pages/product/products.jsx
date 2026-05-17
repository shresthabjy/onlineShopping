import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";


function Products() {
  const navigate = useNavigate();
const [products, setProducts] = useState([]);

const columns = [
  {
    name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg">Name</span>,
    selector: row => row.productName,
    sortable: true,
    
  },
  {
    name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg">Price</span>,
    selector: row => row.price,
    sortable: true,
  },
  {
    name: '',
    cell: (row) => <button onClick={() => handleEdit(row)}>Edit</button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
{
    name: '',
    cell: (row) => <button onClick={() => handleEdit(row)}>Delete</button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },

];
useEffect(() => {
    fetch("https://localhost:44317/api/ProductApi")
    .then(res => res.json())
    .then(data => {
        setProducts(data);
    });
}, []);


  return (
    <div className="flex-1 transition-all duration-300 bg-[#F3F5F7] px-3 h-full overflow-hidden">
      <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex flex-col items-center justify-center">
      <div className="p-5 w-full">
<div className="flex justify-between items-center">

  <div>
    <h1 className="text-2xl font-bold mb-5">
      Product List
    </h1>
  </div>

  <div>
    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/product/create")}>
      <Plus size={18} />
      Add Product
    </button>
  </div>

</div>
<br></br>
<hr></hr>
<DataTable
      columns={columns}
      data={products}
      slots={{
    3: (data, row) => (
      <button onClick={() => editRow(row)}>Edit</button>
    )
  }}
  slots={{
    4: (data, row) => (
      <button onClick={() => editRow(row)}>Deletet</button>
    )
  }}
      pagination // Adds pagination automatically
      highlightOnHover
      pointerOnHover
    />

    </div>
      </div>
    </div>
  );
}

export default Products;



  