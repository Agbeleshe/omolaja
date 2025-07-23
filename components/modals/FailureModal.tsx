"use client";

import { XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type FailureModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

export const FailureModal = ({
  open,
  onClose,
  title = "Something Went Wrong",
  message = "There was an error submitting your form. Please try again or contact us directly.",
}: FailureModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm text-center p-6">
        <div className="flex justify-center mb-4 text-red-600">
          <XCircle className="w-12 h-12" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-600 text-sm mt-2 text-center">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
};
