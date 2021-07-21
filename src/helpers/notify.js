import { toast } from "react-toastify";

export const ToastClear = () => {
  toast.dismiss();
};

export const ToastError = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
