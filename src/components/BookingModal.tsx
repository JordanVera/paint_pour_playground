"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BookingForm } from "@/components/BookingForm";
import { useBookingModal } from "./BookingModalContext";

export function BookingModal() {
  const { open, closeBookingModal } = useBookingModal();

  return (
    <Dialog open={open} onOpenChange={(open) => !open && closeBookingModal()}>
      <DialogContent className="p-0 border-0">
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-2">Book Us</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
          <BookingForm onClose={closeBookingModal} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
