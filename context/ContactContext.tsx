"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ContactContextType } from "./type";

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <ContactContext.Provider value={{ open, setOpen }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error(
      "useContactContext must be used within a ContactContextProvider"
    );
  }
  return context;
};
