import { createContext, useState } from "react";

interface IModalContext {
  modal: boolean;
  close: () => void;
  open: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  close: () => {},
  open: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);

  const close = () => {
    setModal(false);
  };
  const open = () => {
    setModal(true);
  };

  return <ModalContext.Provider value={{ modal, open, close }}>{children}</ModalContext.Provider>;
};
