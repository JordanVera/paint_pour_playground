"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface BookingModalContextValue {
  open: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue>({
  open: false,
  openBookingModal: () => {},
  closeBookingModal: () => {},
});

export function useBookingModal() {
  return useContext(BookingModalContext);
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openBookingModal = useCallback(() => setOpen(true), []);
  const closeBookingModal = useCallback(() => setOpen(false), []);

  return (
    <BookingModalContext.Provider
      value={{ open, openBookingModal, closeBookingModal }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}
