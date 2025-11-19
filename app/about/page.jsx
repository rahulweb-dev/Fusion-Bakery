'use client';
import { useSelect } from '../context/SelectContext';

import CloudKitchen from '../components/About/cloudKitchen';
import AboutChocolates from '../components/About/AboutChocolates';

export default function AboutPage() {
  const { select } = useSelect();

  return (
    <div className='mt-30'>
      {select === 'Cloud Kitchen' ? <CloudKitchen /> : <AboutChocolates />}
    </div>
  );
}
