import React, { ReactNode } from "react";
import { Modal } from "antd";

interface Props {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>> ;
}

const Modals = ({ children, open, setOpen }: Props) => {

  return (
    <div>
      <Modal
        title=""
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => {
          setOpen(false);
        }}
        footer={null}
        style={{ borderRadius: "10px", width: "1000px" }}
        closable={false}
        destroyOnHidden
        keyboard
        className={` xl:!w-[35%] md:!w-[50%] !w-[90%] max-h-[70%] `}
      >
        {children}
      </Modal>
    </div>
  );
};

export default Modals;
