const priceFormetter = (price: number) =>{
 const newFormat = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price);
  return newFormat;
}
export default priceFormetter;