import { Modal } from "antd";
import { useAuthStore } from "../../../../store/auth";
import { memo } from "react";

interface Props {
  open: boolean;
  closeModal: () => void;
}

export const LogoutModal = memo(
  ({ open = false, closeModal = () => {} }: Props) => {
    const { setAuth } = useAuthStore();
    return (
      <>
        <Modal
          title="Logout"
          open={open}
          onOk={() => setAuth(false)}
          onCancel={() => closeModal()}
          cancelText="Bekor qilish"
          okText="Tasdiqlash"
        >
          <p className="text-red-500">Are you sure to logout the account!</p>
        </Modal>
      </>
    );
  }
);
