import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
	isOpen: boolean;
	setIsOpen: (arg0: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  About
                </Dialog.Title>
                <hr className="mt-1" />
                <div className="mt-2 mb-6">
                  <p className="text-sm text-gray-500">
                    <b>Random Quote Generator</b> is used to randomize quotes by assigning names inputted by user as the subjects of the dialog. It is inspired
                    by <a href="https://perchance.org/incorrect-quote-generator" target="_blank">https://perchance.org/incorrect-quote-generator</a>.
                  </p>
                </div>
                
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Help / Instruction
                </Dialog.Title>
                <hr className="mt-1" />
                <div className="mt-2 mb-6">
                  <p className="text-sm text-gray-500">
                    <ul className="list-disc px-4">
                      <li>Choose a number from provided number of people dropdown</li>
                      <li>Input names according to your previous chosen number, names must be separated by enter</li>
                      <li>Click <b>Generate Quote</b> to generate a randomized quote filled with your inputted names</li>
                      <li>Click <b>Shuffle Names</b> to shuffle the order of the names assigned to the quote</li>
                      <li>Have fun!</li>
                    </ul>
                  </p>
                </div>

                <div className="mt-8 text-right">
                  <button
                    type="button"
                    className="bg-gray-100 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:brightness-95 duration-75"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal;