"use client";

import Modal from "@/components/modals";

export default function Home() {
  return (
    <div className="p-4">
      <Modal
        isOpen
        title="Create Store"
        description="Create your store here."
        onClose={() => {}}
      >
        <div>Content</div>
      </Modal>
    </div>
  );
}
