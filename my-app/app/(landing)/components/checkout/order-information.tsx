const OrderInformation = () => {
 return(
  <div className="bg-white">
   <div className="px-5 py-4 border-b border-gray-200">
    <div className="font-bold text-lg">Order Information</div>
   </div>
    <div className="p-5">
     <div className="input-group">
      <label htmlFor="full_name">Full Name</label>
      <input type="text" id="full_name" className="" placeholder="Type Your Full Name" />
      </div>
          <div className="input-group">
      <label htmlFor="whatsapp_number">Whatsapp Number</label>
      <input type="text" id="whatsapp_number" className="" placeholder="Type Your Whatsapp Number" />
      </div>
          <div className="input-group">
      <label htmlFor="shipping_address">Shipping Address</label>
           <textarea
             placeholder="Type your shipping address"
             id="shipping_address"
             rows={7}
           />
     </div>
   </div>
  </div>
 )
};
export default OrderInformation;