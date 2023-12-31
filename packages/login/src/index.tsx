import React, { useState } from "react";
import { Button, Modal } from "antd";

interface Props {
  className: string;
}

export default function Login({ className }: Props) {
  const [open, setopen] = useState(false);

  return (
    <>
      <Button onClick={() => setopen(true)} className={className}>
        登录
      </Button>
      <Modal title="登录" open={open} onCancel={() => setopen(false)}>
        <p>登录窗口</p>
      </Modal>
    </>
  );
}
