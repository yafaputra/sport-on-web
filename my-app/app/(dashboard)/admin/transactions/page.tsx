"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import {  useState } from "react";
import TransactionsTable from "../../components/transaction/transaction-table";
import TransactionsModel from "../../components/transaction/transaction-model";
const TransactionsManagement = () => {
  const [isOpen, setOpen] = useState(false);

  const handleCloseModel = () => {
    setOpen(false);
  };

  const handleViewDetails = () => {
    setOpen(true);
  }
  return <div>
   <div className="flex justify-between items-center mb-10">
    <div>
     <h1 className="font-bold text-2xl">Transactions Management</h1>
     <p className="opacity-50">Organize your products into categories.</p>
    </div>
    <Button className="rounded-lg" onClick={() => setOpen(true)}> <FiPlus  size={24}/> Add Product</Button>
   </div>
   < TransactionsTable onViewDetails={handleViewDetails} />
   <TransactionsModel isOpen={isOpen} onClose={handleCloseModel} />
   </div>;
};
export default TransactionsManagement;