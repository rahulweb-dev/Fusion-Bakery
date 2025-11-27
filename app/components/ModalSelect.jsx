'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelect } from '../context/SelectContext';

let alreadyHandled = false; // 👈 Fix Strict Mode double trigger

export default function ModalSelect() {
  const { updateSelect } = useSelect();

  const [shakeModal, setShakeModal] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [openSelectState, setOpenSelectState] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 🚫 If already executed once (strict mode double render)
    if (alreadyHandled) return;
    alreadyHandled = true;

    const saved = localStorage.getItem('selectedState');
    const modalShown = sessionStorage.getItem('modalShown');

    if (modalShown && saved) {
      updateSelect(saved);
      document.body.style.overflow = 'auto';
      return;
    }

    if (!saved) {
      setOpenSelectState(true);
      document.body.style.overflow = 'hidden';
    } else {
      updateSelect(saved);
      document.body.style.overflow = 'auto';
    }
  }, []);

  const handleClick = (option) => {
    setSelectedState(option);
    updateSelect(option);

    localStorage.setItem('selectedState', option);
    sessionStorage.setItem('modalShown', 'yes');

    setOpenSelectState(false);
    document.body.style.overflow = 'auto';
  };

  const handleBGClick = (e) => {
    if (e.target.id !== 'modal-container') return;

    if (!selectedState) {
      setShakeModal(true);
      setErrorMsg('⚠️ Please select an option to continue');
      setTimeout(() => setShakeModal(false), 600);
      return;
    }
    setOpenSelectState(false);
    document.body.style.overflow = 'auto';
  };

  if (!openSelectState) return null;
  document.body.style.overflow = 'hidden';

  return (
    <div
      id="modal-container"
      className="fixed inset-0 flex items-center justify-center z-[9999] backdrop-blur-md bg-black/60"
      onClick={handleBGClick}
    >
      <div
        className={`bg-white w-full max-w-2xl rounded-2xl py-6 px-4 m-3 shadow-2xl border border-white/30 animate-fadeUp ${
          shakeModal ? 'animate-shake' : ''
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="logo"
          width={300}
          height={300}
          className="w-auto h-24 sm:h-28 md:h-40 mx-auto mb-6"
        />

        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Choose Your Option
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
          <div
            onClick={() => handleClick('Corporate-Gifting')}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg w-full h-[160px] sm:h-[200px] group hover:scale-[1.03] transition-transform"
          >
            <Image src="/images/01.webp" alt="Corporate" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex justify-center items-center text-white text-lg sm:text-xl md:text-2xl font-semibold">
              Corporate Gifting
            </div>
          </div>

          <div
            onClick={() => handleClick('Cloud Kitchen')}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg w-full h-[160px] sm:h-[200px] group hover:scale-[1.03] transition-transform"
          >
            <Image src="/images/cloud_kitchen.png" alt="Cloud Kitchen" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex justify-center items-center text-white text-lg sm:text-xl md:text-2xl font-semibold">
              Cloud Kitchen
            </div>
          </div>
        </div>

        {errorMsg && (
          <p className="text-center text-red-600 text-sm font-medium animate-pulse">{errorMsg}</p>
        )}

        <p className="text-center text-gray-700 text-xs sm:text-sm mt-2">
          Tap an option above to continue
        </p>
      </div>
    </div>
  );
}

export function forceModalOpen() {
  localStorage.removeItem('selectedState');
  sessionStorage.removeItem('modalShown');
  alreadyHandled = false; // 👈 allow reopen cleanly
  window.location.reload();
}
