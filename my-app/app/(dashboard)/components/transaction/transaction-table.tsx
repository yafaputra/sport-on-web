import Button from "@/app/(landing)/components/ui/button";
import priceFormetter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const transactionData = [
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: "+123123123 ",
    total: 1500000,
    status: "pending",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe 2",
    contact: "+123123123 ",
    total: 2500000,
    status: "rejected",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe 3",
    contact: "+123123123 ",
    total: 1000000,
    status: "paid",
  },
];
type TCategoriesTableProps = {
  onViewDetails: () => void;
};

const TransactionsTable = ({ onViewDetails  } : TCategoriesTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLocaleLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300"; 
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 ">
     <table className="w-full text-left border-collapse">
      <thead>
       <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
       </tr>
      
      </thead>
      <tbody>
       {transactionData.map((transaction, index) => (
        <tr key={index} className="border-b border-gray-200 last:border-b-0 ">
         <td className="px-6 py-4 font-medium">{transaction.date}</td>
         <td className="px-6 py-4 font-medium">{transaction.customer}</td>
          <td className="px-6 py-4 font-medium">{transaction.contact}</td>
          <td className="px-6 py-4 font-medium">{priceFormetter(transaction.total)}</td>
          <td className="px-6 py-4 font-medium">
            <div className={`px-2 py-1 rounded-full text-center w-fit text-sm border uppercase ${getStatusColor(transaction.status)}`}>{transaction.status}</div>
          </td>

         <td className="flex gap-3  px-6 py-7.5 items-center text-gray-600">
          <button className="flex items-center gap-2 corsor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md">
            <FiEye size={18}/>
            View Details
            
            </button>
          
         </td>
        </tr>

       ))}
      </tbody>
         
     </table>
    </div>
  );
} 
export default TransactionsTable;