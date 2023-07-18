"use client";

import { useEffect } from "react";
import StoreModal from "@/components/modals/StoreModal";
import useStoreModal from "@/hooks/useStoreModal";

const ModalProvider = () => {
  const { onOpen } = useStoreModal();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <StoreModal />
    </>
  );
};

export default ModalProvider;
