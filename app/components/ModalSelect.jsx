'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelect } from '../context/SelectContext';

export default function ModalSelect() {
  const router = useRouter();
  const { updateSelect } = useSelect();

  const [shakeModal, setShakeModal] = useState(false);
  const [error, setError] = useState('');
  const [openSelectState, setOpenSelectState] = useState(false); // FIX 1
  const [selectedState, setSelectedState] = useState('');
  const [loading, setLoading] = useState(true); // FIX 2 stops flashing

  // Handle user click
  const handleClick = (option) => {
    setSelectedState(option);
    setError('');

    // Update context
    updateSelect(option);

    // Save in storage
    sessionStorage.setItem('selectedState', option);
    sessionStorage.setItem('modalShown', 'yes');

    // Close modal
    setOpenSelectState(false);
    document.body.style.overflow = 'auto';

    router.push('/');
  };

  // Close when clicking outside
  const handleOnClose = (e) => {
    if (e.target.id === 'modal-container') {
      if (!selectedState) {
        setError('Please select an option');
        setShakeModal(true);
        setTimeout(() => setShakeModal(false), 500);
        return;
      }
      setOpenSelectState(false);
      document.body.style.overflow = 'auto';
    }
  };

  // FIX 3 – Decide visibility BEFORE rendering modal
  useEffect(() => {
    const shown = sessionStorage.getItem('modalShown');
    const saved = sessionStorage.getItem('selectedState');

    if (!shown) {
      setOpenSelectState(true); // show only first time
      document.body.style.overflow = 'hidden';
    } else {
      setOpenSelectState(false); // don't show again
      document.body.style.overflow = 'auto';
    }

    if (saved) {
      setSelectedState(saved);
      updateSelect(saved);
    }

    setLoading(false); // allow modal render after check
  }, [updateSelect]);

  // FIX 4: Prevent flicker
  if (loading) return null;

  if (!openSelectState) return null;

  return (
    <div
      id="modal-container"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center z-[9999] backdrop-blur-md bg-black/60"
    >
      <div
        className={`bg-white/90 w-full max-w-2xl rounded-2xl py-6 px-4 m-3 shadow-2xl border border-white/30 transition-all duration-200 ${
          shakeModal ? 'animate-shake-modal' : ''
        }`}
      >
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-auto h-16 md:h-20 mx-auto mb-6"
        />

        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Choose Your Option
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">

          {/* Chocolate */}
          <div
            onClick={() => handleClick('Chocolate')}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg w-[280px] h-[200px] group hover:scale-[1.03] transition-transform"
          >
            <Image src="/images/images.jpeg" alt="Chocolate" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex justify-center items-center text-white text-3xl font-semibold">
              Chocolate
            </div>
          </div>

          {/* Cloud Kitchen */}
          <div
            onClick={() => handleClick('Cloud Kitchen')}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg w-[280px] h-[200px] group hover:scale-[1.03] transition-transform"
          >
            <Image src="/images/cloud_kitchen.png" alt="Cloud Kitchen" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex justify-center items-center text-white text-3xl font-semibold">
              Cloud Kitchen
            </div>
          </div>
        </div>

        {error && <p className="text-center text-red-600 font-medium text-sm mb-2">{error}</p>}

        <p className="text-center text-gray-700 text-sm">
          Please select any option above to continue
        </p>
      </div>
    </div>
  );
}
