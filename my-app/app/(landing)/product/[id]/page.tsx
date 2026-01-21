import Image from "next/image";
import ProductAction from "../../components/product-detail/product-action";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

type TPageProps = {
  params: Promise<{ id: string }>;
};  
const ProductDetail = async ({ params }: TPageProps) => {
  const { id } = await params;

  const product = await getProductDetail(id);
  
  
 return (
  <main  className="container mx-auto py-40 flex gap-12">
   <div className="bg-primary-light  min-w-140 flex justify-center items-center">
    <Image
     src={getImageUrl(product.imageUrl)}
     width={550}
     height={550}
     alt={product.name}
     className="aspect-square object-contain w-full"
    />
   </div>
   <div className="w-full py-7">
    <h1 className="text-5xl font-bold mb-6">{product.name} </h1>
    <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-6">{product.category.name}</div>
    <p className="leading-loose mb-8"> {product.description}</p>

    <div className="text-primary font-semibold text-[32px] mb-12">
      {
        Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits:3 }).format(product.price)
      }
   </div>
    <ProductAction product={product} stock={product.stock} />
   </div>

  
  </main>
  )
};

 export default ProductDetail; 