import {useState} from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./components/sidebar";

import Category from "./pages/category/index";
import CategoryCreate from "./pages/category/create";
import CategoryEdit from "./pages/category/edit";

import Product from "./pages/product/index";
import ProductCreate from "./pages/product/create";
import ProductEdit from "./pages/product/edit";


function App() {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    
    <>
      <div className="flex h-screen bg-[#F3F5F7] p-4 gap-4">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
         <Routes forceRefresh={true}>
        <Route path="/" element={<Home />} />
        
        <Route path="/category" element={<Category />} />
        <Route path="/category/create" element={<CategoryCreate />} />
        <Route path="/category/edit/:id" element={<CategoryEdit />} />
        
        <Route path="/product" element={<Product />} />
        <Route path="/product/create" element={<ProductCreate />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />

      </Routes>
      </div>
    </>
  ) 
}

export default App