'use client';
import { useSelect } from '../context/SelectContext';

import CloudKitchen from '../components/About/cloudKitchen';
import AboutCorporate1 from '../components/About/AboutCorporate-gifts';


export default function AboutPage() {
  const { select } = useSelect();

  return (
    <div className='mt-30'>
      {select === 'Cloud Kitchen' ? <CloudKitchen /> : <AboutCorporate1 />}
    </div>
  );
}
