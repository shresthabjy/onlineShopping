import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";


function Category() {
  const navigate = useNavigate();
const [category, setCategory] = useState([]);
const [resetPaginationToggle, setResetPaginationToggle] =
  useState(false);

const handleEdit = (id) => {
  console.log(id);
  navigate(`/category/edit/${id}`);
};



const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure?"
  );

  if (!confirmDelete) return;

  await fetch(
    `https://localhost:44317/api/categoryapi/${id}`,
    {
      method: "DELETE"
    }
  );

  alert("Deleted");

  getCategory();
};
const getCategory = async () => {

  const response = await fetch(
    "https://localhost:44317/api/categoryapi"
  );

  const data = await response.json();

  setCategory(data);
};
const columns = [
  {
    name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg ">Name</span>,
    selector: row => row.categoryName,
    sortable: true,
    
  },
  {
    name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg">Active</span>,
    //selector: row => row.isActive,
    cell: row => row.isActive ? "Yes" : "No",

    sortable: true,
  },
  {
    name: '',
    cell: (row) => <button  className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(row.categoryId)}>Edit</button>,
    ignoreRowClick: true,
  },
{
    name: '',
    cell: (row) => <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(row.categoryId)}>Delete</button>,
    ignoreRowClick: true,
  },

];
useEffect(() => {
    fetch("https://localhost:44317/api/categoryapi")
    .then(res => res.json())
    .then(data => {
        setCategory(data);
    });
}, []);


  return (
   <div className="flex-1 bg-white rounded-md border border-gray-200 shadow-sm p-6 overflow-auto">
  <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] p-6 shadow-sm">
      <div className="p-5 w-full ">
<div className="flex justify-between items-start ">

  <div>
    <h1 className="text-2xl font-bold mb-5">
      Category List
    </h1>
  </div>

  <div>
    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/category/create")}>
      <Plus size={18} />
      Add Category
    </button>
  </div>

</div>
<br></br>
<hr></hr>
<DataTable
  columns={columns}
  data={category}
  pagination
  paginationPerPage={5}
  paginationRowsPerPageOptions={[5,10,20]}
  highlightOnHover
  pointerOnHover
  striped
/>

    </div>
      </div>
    </div>
  );
}

export default Category;