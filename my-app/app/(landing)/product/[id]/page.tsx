import Image from "next/image";
import ProductAction from "../../components/product-detail/product-action";

const ProductDetail = () => {
 return (
  <main  className="container mx-auto py-40 flex gap-12">
   <div className="bg-primary-light  min-w-140 flex justify-center items-center">
    <Image
     src="/Products/product-1.png"
     width={550}
     height={550}
     alt="Product Image"
     className="aspect-square object-contain w-full"
    />
   </div>
   <div className="w-full py-7">
    <h1 className="text-5xl font-bold mb-6">SportsOn HyperSoccer v2</h1>
    <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-6">Football</div>
    <p className="leading-loose mb-8"> The SportsOn HyperSoccer v2 is engineered for the player who demands
          precision, power, and unrivaled speed on the pitch. Featuring a
          striking, two-toned black and white design with deep crimson accents,
          these cleats don't just perform—they make a statement. Experience the
          future of football footwear with v2's enhanced fit and cutting-edge
          traction. </p>

    <div className="text-primary font-semibold text-[32px] mb-12">
      {
        Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits:3 }).format(349000)
      }
   </div>
    <ProductAction />
   </div>

  
  </main>
  )
};

 export default ProductDetail; 