'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelect } from '../context/SelectContext';
import toast from 'react-hot-toast';

export default function ModalSelect({ openSelectState, setOpenSelectState }) {
  const { updateSelect } = useSelect();
  const [shakeModal, setShakeModal] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  // FIRST TIME ONLY
  useEffect(() => {
    const saved = localStorage.getItem('selectedState');

    if (!saved) {
      setOpenSelectState(true);
      document.body.style.overflow = 'hidden';
    } else {
      setSelectedState(saved);
      updateSelect(saved);
    }
  }, [updateSelect, setOpenSelectState]);

  // SELECT CLICK
  const handleClick = (option) => {
    setSelectedState(option);
    updateSelect(option);
    localStorage.setItem('selectedState', option);
    toast.success(`${option} Selected! 🎉`);

    setOpenSelectState(false);
    document.body.style.overflow = 'auto';
  };

  // BLOCK CLOSE WITHOUT SELECTING
  const handleOnClose = (e) => {
    if (e.target.id === 'modal-container') {
      if (!selectedState) {
        setShakeModal(true);
        setTimeout(() => setShakeModal(false), 600);
        return;
      }
      setOpenSelectState(false);
      document.body.style.overflow = 'auto';
    }
  };

  if (!openSelectState) return null;

  return (
    <div
      id='modal-container'
      onClick={handleOnClose}
      className='fixed inset-0 flex items-center justify-center z-[9999] backdrop-blur-md bg-black/60'
    >
      <div
        className={`bg-white w-full max-w-2xl rounded-2xl py-6 px-4 m-3 shadow-2xl border border-white/30 animate-fadeUp 
        ${shakeModal ? 'animate-shake' : ''}`}
      >
        <Image
          src='/images/logo.png'
          alt='logo'
          width={300}
          height={300}
          className='w-auto h-24 sm:h-28 md:h-40 mx-auto mb-6'
        />

        <h2 className='text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4'>
          Choose Your Option
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4'>
          <div
            onClick={() => handleClick('Corporate-Gifting')}
            className='relative cursor-pointer rounded-xl overflow-hidden shadow-lg w-full h-[160px] sm:h-[200px] group hover:scale-[1.03] transition-transform'
          >
            <Image src='/images/01.webp' alt='Corporate Gifting' fill className='object-cover' />
            <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 flex justify-center items-center text-white text-lg sm:text-xl md:text-2xl font-semibold'>
              Corporate Gifting
            </div>
          </div>

          <div
            onClick={() => handleClick('Cloud Kitchen')}
            className='relative cursor-pointer rounded-xl overflow-hidden shadow-lg w-full h-[160px] sm:h-[200px] group hover:scale-[1.03] transition-transform'
          >
            <Image src='/images/cloud_kitchen.png' alt='Cloud Kitchen' fill className='object-cover' />
            <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 flex justify-center items-center text-white text-lg sm:text-xl md:text-2xl font-semibold'>
              Cloud Kitchen
            </div>
          </div>
        </div>

        <p className='text-center text-gray-700 text-xs sm:text-sm'>
          Tap an option above to continue
        </p>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px) scale(0.98);} to { opacity: 1; transform: translateY(0) scale(1);} }
        @keyframes shake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(4px); }
          30%, 50%, 70% { transform: translateX(-6px); }
          40%, 60% { transform: translateX(6px); }
        }
        .animate-fadeUp { animation: fadeUp 0.25s ease-out forwards; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
}
