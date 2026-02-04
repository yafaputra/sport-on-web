"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import {  useState } from "react";
import  CategoriesTable  from "../../components/categories/categories-table";
import CategoriesModel from "../../components/categories/categories-model";

const CategoriesManagement = () => {
  const [isOpen, setOpen] = useState(false);

  const handleCloseModel = () => {
    setOpen(false);
  };
  return <div>
   <div className="flex justify-between items-center mb-10">
    <div>
     <h1 className="font-bold text-2xl">Categories Management</h1>
     <p className="opacity-50">Organize your products into categories.</p>
    </div>
    <Button className="rounded-lg" onClick={() => setOpen(true)}> <FiPlus  size={24}/> Add Product</Button>
   </div>
   < CategoriesTable />
   <CategoriesModel isOpen={isOpen} onClose={handleCloseModel} />
   </div>;
};
export default CategoriesManagement;