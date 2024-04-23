import { Dialog } from "@headlessui/react";
import Sidebar from "./templates/Sidebar";

function CategoryModal({
  isOpenCategory,
  setIsOpenCategory,
  closeCategory,
  setIsActive,
}) {
  return (
    <Dialog open={isOpenCategory} onClose={() => setIsOpenCategory(false)}>
      <Dialog.Panel className="fixed inset-0 bottom-[56px] md:hidden bg-white overflow-scroll">
        <Sidebar
          isOpenCategory={isOpenCategory}
          closeCategory={closeCategory}
          setIsActive={setIsActive}
        />
      </Dialog.Panel>
    </Dialog>
  );
}

export default CategoryModal;
