// app/products/[slug]/page.jsx
'use client';

import SingleProductClient from '@/app/components/SingleProductClient';
import { use } from 'react';

export default function SingleProductWrapper({ params }) {
  const resolved = use(params); // unwrap promise
  return <SingleProductClient slug={resolved.slug} />;
}
