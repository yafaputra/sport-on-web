"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductsTable from "../../components/products/produts-table";
import ProductModel from "../../components/products/product-model";
import {  useState } from "react";

const ProductManagement = () => {
  const [isOpen, setOpen] = useState(false);

  const handleCloseModel = () => {
    setOpen(false);
  };
  return <div>
   <div className="flex justify-between items-center mb-10">
    <div>
     <h1 className="font-bold text-2xl">Product Management</h1>
     <p className="opacity-50">Manage your products here.</p>
    </div>
    <Button className="rounded-lg" onClick={() => setOpen(true)}> <FiPlus  size={24}/> Add Product</Button>
   </div>
   <ProductsTable />
   <ProductModel isOpen={isOpen} onClose={handleCloseModel} />
   </div>;
};
export default ProductManagement;