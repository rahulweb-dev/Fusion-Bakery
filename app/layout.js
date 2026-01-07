import { Geist, Geist_Mono } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';

import { SelectProvider } from './context/SelectContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import ClientLayout from './ClientLayout';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Fusion – Premium Corporate Gifting & Cloud Kitchen Desserts',
  description:
    'Fusion offers premium corporate gifting, luxury hampers, gourmet desserts, cloud kitchen delivery, brownies, chocolates & cakes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppins.variable}
          antialiased
          font-[var(--font-poppins)]
        `}
      >
        <SelectProvider>
          <CartProvider>
            <WishlistProvider>
              <ClientLayout>{children}</ClientLayout>
            </WishlistProvider>
          </CartProvider>
        </SelectProvider>
      </body>
    </html>
  );
}
