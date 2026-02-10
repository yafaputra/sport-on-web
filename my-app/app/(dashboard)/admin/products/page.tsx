"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductsTable from "../../components/products/produts-table";
import ProductModel from "../../components/products/product-model";
import {  useEffect, useState } from "react";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product.service";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/modal-delete";

const ProductManagement = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [products , setProducts] = useState<Product[]>([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState("");

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  
  const handleEdit = (product: Product) => {
    setSelectedProductId(product);
    setModalOpen(true);
  };

  const handleDelete= (id: string) => {
    setProductToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDelete) return;
    try {
      await deleteProduct(productToDelete);
      fetchProducts();
      toast.success("Product deleted successfully!");
      setDeleteModalOpen(false);
      setProductToDelete("");

    }
    catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product.");
    }
    
  };

  useEffect(() => {
    const load = async () => {
      await fetchProducts();
    };

    load();
  }, []);



  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProductId(null);
  };
  return <div>
   <div className="flex justify-between items-center mb-10">
    <div>
     <h1 className="font-bold text-2xl">Product Management</h1>
     <p className="opacity-50">Manage your products here.</p>
    </div>
    <Button className="rounded-lg" onClick={() => setModalOpen(true)}> <FiPlus  size={24}/> Add Product</Button>
   </div>
   <ProductsTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
   <ProductModel product={selectedProductId} isOpen={isModalOpen} onClose={handleCloseModal} onSuccess={fetchProducts} />
 <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
   </div>;
};
export default ProductManagement;