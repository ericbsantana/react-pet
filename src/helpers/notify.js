import { toast } from "react-toastify";

export const ToastClear = () => {
  toast.dismiss();
};

export const ToastError = (msg) => {
  toast.error(msg);
};
