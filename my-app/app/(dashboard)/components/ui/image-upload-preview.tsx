import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Image from "next/image";
import { on } from "events";
type TImageUploadPreviewProps = {
  label?: string;
  value?: string | null;
  onChange?: (file: File) => void;
  className?: string;
};

const ImageUploadPreview = ({ label, value, onChange, className }: TImageUploadPreviewProps) => {
 const fileInputRef = useRef<HTMLInputElement | null>(null);

 const handleImageChange = () => {
  fileInputRef?.current?.click();
 };
 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
   const file = e.target.files[0];
   onChange(file);
  }
 };

 return (
   <div className={className}>
    <div onClick={handleImageChange} className="border-2 border-dashed border-prtimary bg-primary/5 rounded-b-lg h-50 flex flex-col justify-center items-center ">
     {value ? (
      <Image src={value} alt="Uploaded Image" width={190} height={190} className="object-cover h-full h-full"  />
     ) : (
     <>
     <FiUploadCloud className ="text-primary" size={24}/>
     <span className="text-sm font-medium">CClick to upload</span>
     </>
     )}
    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange}/>
    </div>
   </div>
  )
};
export default ImageUploadPreview;