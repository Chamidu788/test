import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-[70px]  lg:p-8 sm:p-2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <h2 className="text-[46px] font-bold text-[#16205F] mb-4">Build a team</h2>
        <p className="text-[#16205F] text-[18px] mb-6">We specialize in helping you build a team.</p>
        <div className="flex gap-0 lg:ml-0 lg:mr-[300px]  mb-6">
          <button className="flex-1 py-2 lg:h-[40px] lg:w-[20px]  bg-blue-500 text-white rounded hover:bg-blue-700">Option 1</button>
          <button className="flex-1 py-2 lg:h-[40px] lg:w-[20px] bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Option 2</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Company" className="border border-gray-300 p-2 rounded" />
          <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded" />
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;