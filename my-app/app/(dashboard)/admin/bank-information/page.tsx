"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import {   useEffect, useState } from "react";
import BankInfoModal from "../../components/bank-info/bank-model";
import BankInfoList from "../../components/bank-info/bank-info-list";
import { Bank } from "@/app/types";
import { getAllBanks } from "@/app/services/bank.service";
import { deleteBank } from "@/app/services/bank.service";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/modal-delete";

const BankInfoManagement = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [ banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);


  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [bankToDelete, setBankToDelete] = useState("");

  const fetchBanks = async () => {
    try {
      const data = await getAllBanks();
      if (data) {
        setBanks(data);
      }
    } catch (error) {
      console.error("Failed to fetch banks:", error);
    }
  };

  const handleCloseModel = () => {
    setModalOpen(false);
    setSelectedBank(null);
  };

  const handleEdit = (bank: Bank) => {
    setSelectedBank(bank);
    setModalOpen(true);
  }

  const handleDelete= (id: string) => {
    setBankToDelete(id);
    setDeleteModalOpen(true);
  }

  const handleDeleteConfirm = async () => {
    if (!bankToDelete) return;
    try {
      await deleteBank(bankToDelete);
      toast.success("Bank info deleted successfully!");
      setDeleteModalOpen(false);
      setBankToDelete("");
      fetchBanks();
    }
    catch (error) {
      console.error("Failed to delete bank info:", error);
      toast.error("Failed to delete bank info.");
    }
  };




  useEffect(() => {
    (async () => {
      await fetchBanks();
    })();
  }, []);

  return <div>
   <div className="flex justify-between items-center mb-10">
    <div>
     <h1 className="font-bold text-2xl">Bank Info Management</h1>
     <p className="opacity-50">Organize your products into categories.</p>
    </div>
    <Button className="rounded-lg" onClick={() => setModalOpen(true)}> <FiPlus  size={24}/> Add Product</Button>
   </div>
   < BankInfoList 
    banks={banks}
    onEdit={handleEdit} 
    onDelete={handleDelete} />
   <BankInfoModal 
    isOpen={isModalOpen} 
    onClose={handleCloseModel} 
    onSuccess={fetchBanks}
    bank={selectedBank}
     />
    <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
   </div>;
};
export default BankInfoManagement;