import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/model";
type TDeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};


const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
}: TDeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Item">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      <div className="flex gap-5 mt-5">
        <Button
          onClick={onClose}
          variant="ghost"
          className="w-full rounded-md">Cancel
          </Button>
        <Button
          onClick={onConfirm}
          className="w-full rounded-md">Yes, Delete it
         </Button>

      </div>
    </Modal>
  );
}
export default DeleteModal;