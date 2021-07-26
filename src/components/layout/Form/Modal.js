import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import { Fragment } from "react";

const Modal = (props) => {
  return (
    <Transition
      as={Fragment}
      show={props.isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Dialog
        onClose={() => props.setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h1"
              className="text-lg font-medium leading-6 text-gray-800"
            >
              {props.title}
            </Dialog.Title>
            <Dialog.Description as="p" className="flex flex-col my-5">
              {props.description}
            </Dialog.Description>

            <Button
              className="py-1 px-2 inline-flex justify-center text-sm font-medium border border-transparent rounded-md"
              onClick={() => props.setIsOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
