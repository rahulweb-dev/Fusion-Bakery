import GiftBoxesPage from '@/app/Chocolate-components/GiftBoxesPage'
import HeroBanner from '@/app/cloudComponents/heroBanner'
import React from 'react'

export default function page() {
  return (
    <div className='p-5'>
      <HeroBanner />
      <GiftBoxesPage />
    </div>
  )
}
