import { Category, } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { getImageUrl } from "@/app/lib/api";


type TCategoriesProps = {
  categories: Category[];
};

const Categories = ({ categories }: TCategoriesProps) => {
 return (
  <section id="categoriy-section" className="container mx-auto">
   <div className="flex justify-between">
    <h2 className="text-2xl font-bold">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
   </div>
   <div className="grid grid-cols-6 gap-12 mt-10">
    {categories.map((category) => (
    <div className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"key={category._id}>
      <div className="self-center">
       <Image
              src={getImageUrl(category.imageUrl)}
               width={86}
               height="86"
               alt={category.name}
               className="mb-[10px]"
            />
        <div className="text-primary font-medium text-xl text-center">{category.name}</div>
     </div>
    </div>

    ))}
    </div>
   </section>
 );
};

export default Categories;