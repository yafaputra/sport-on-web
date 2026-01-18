import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/cart-with-header";

const paymentList = [
  {
    bank_name: "BCA",
    account_number: 1231231231231,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "Mandiri",
    account_number: 89458434,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "BRI",
    account_number: 123891283912,
    account_holder: "PT SportsOn Digital",
  },
];

const PaymentOption = () => {
 return(
  <CardWithHeader title="Payment Options">
   {
    paymentList.map((payment, index) => (
     <div key={index} className="flex gap-5 p-5 border-b border-gray-200 ">
       <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center"><FiCreditCard size={24}/>

       </div>
       <div className="self-center">
        <div className="font-bold">{payment.bank_name}</div>
        <div className="text-sm">{payment.account_number}</div>
        <div className="text-sm opacity-70">{payment.account_holder}</div>
       </div>
       <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center py-1 px-2">Bank Transfer</div>
     </div>
    ))

   }


  </CardWithHeader>
 )
};
export default PaymentOption;