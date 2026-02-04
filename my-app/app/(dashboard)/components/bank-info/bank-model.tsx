import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/model";
import { useState } from "react";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TCategoryModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">

          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                placeholder="e. g. Mandiri, BCA, BNI"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountName">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="e. g. 12312312345"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountName">Account Name</label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                placeholder="e. g. John Doe"
              />
            </div>

           
          </div>
        </div>
        <Button className="ml-auto mt-3 rounded-lg">Create Bank Account</Button>
      </div>
    </Modal>
  );
};

export default BankInfoModal;