"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import {  useState } from "react";
import  CategoriesTable  from "../../components/categories/categories-table";
import CategoriesModel from "../../components/categories/categories-model";
import { Category } from "@/app/types";
import { gelAllCategories } from "@/app/services/category.service";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/modal-delete";
import { deleteCategory } from "@/app/services/category.service";
import { useEffect } from "react";

const CategoryManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [categories, setCategories] = useState<Category[]>([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDeleteId, setCategoryToDeleteId] = useState("");

  const fetchCategories = async () => {
    try {
      const data = await gelAllCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setCategoryToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!categoryToDeleteId) return;
    try {
      await deleteCategory(categoryToDeleteId);
      fetchCategories();
      toast.success("Category deleted successfully");
      setIsDeleteModalOpen(false);
      setCategoryToDeleteId("");
    } catch (error) {
      console.error("Failed to delete category", error);
      toast.error("Failed to delete category");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  useEffect(() => {
    (async () => {
      await fetchCategories();
    })();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Category Management</h1>
          <p className="opacity-50">Organize your products into categories.</p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
          <FiPlus size={24} />
          Add Category
        </Button>
      </div>
      <CategoriesTable
        categories={categories}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <CategoriesModel
        category={selectedCategory}
        onSuccess={fetchCategories}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default CategoryManagement;