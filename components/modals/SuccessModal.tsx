"use client";

import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

export const SuccessModal = ({
  open,
  onClose,
  title = "Message Sent Successfully!",
  message = "We’ve received your information. Our team will get back to you within 24–48 hours check your spam or jusnk mail.",
}: SuccessModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm text-center p-6">
        <div className="flex justify-center mb-4 text-green-600">
          <CheckCircle className="w-12 h-12" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-600 text-sm mt-2 text-center">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
};
