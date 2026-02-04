import Button from "@/app/(landing)/components/ui/button";
import priceFormetter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const CategoriesTable = () => {
 const categoriesData = [
     {
    name: "Running",
    imageUrl: "/Categories/category-running.png",
    description: "lorem ipsum ",
  },
  {
    name: "Football",
    imageUrl: "/Categories/category-football.png",
    description: "lorem ipsum ",
  },

];
 

  return (
    <div className="bg-white rounded-xl border border-gray-200 ">
     <table className="w-full text-left border-collapse">
      <thead>
       <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Category Name</th>
            <th className="px-6 py-4 font-semibold">Description</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
       </tr>
      
      </thead>
      <tbody>
       {categoriesData.map((category, index) => (
        <tr key={index} className="border-b border-gray-200 last:border-b-0 ">
         <td className="px-6 py-4 font-medium">
          <div className="flex gap-2 items-center">
           <div className="aspect-square bg-gray-100 rounded-md">
              <Image
                      src={category.imageUrl}
                      width={52}
                      height={52}
                      alt={category.name}
                      className="aspect-square object-contain"
                    />
           </div>
           <span>{category.name}</span>
          </div>
         </td>
         <td className="px-6 py-4 font-medium">{category.description}</td>
         <td className="flex gap-3  px-6 py-7.5 items-center text-gray-600">
          <button><FiEdit2 size={20}/></button>
          <button><FiTrash2 size={20}/></button>
         </td>
        </tr>

       ))}
      </tbody>
         
     </table>
    </div>
  );
} 
export default CategoriesTable;