import Modal from ".";
import useStoreModal from "@/hooks/useStoreModal";

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Store"
      description="Add a new store to manage products and categories"
    >
      Future Create Store Form
    </Modal>
  );
};

export default StoreModal;
