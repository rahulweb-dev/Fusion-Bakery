import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ModalSelect from './components/ModalSelect';
import Navbar from './components/Navbar';
import { SelectProvider } from './context/SelectContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Toaster } from 'react-hot-toast';
import BottomNav from './components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: "Fusion Bakery – Premium Corporate Gifting & Cloud Kitchen Desserts",
  description:
    "Fusion Bakery offers premium corporate gifting, luxury hampers, gourmet desserts, cloud kitchen food delivery, brownies, chocolates & cakes. Perfect for employees, events, celebrations & everyday cravings.",
  keywords: [
    "corporate gifts",
    "premium gifting",
    "office gifts",
    "corporate hampers",
    "customized gifts",
    "festival corporate gifting",
    "cloud kitchen",
    "gourmet desserts",
    "brownies online",
    "online bakery",
    "food delivery",
    "premium chocolates",
    "cake delivery",
    "gift hampers"
  ],
  openGraph: {
    title: "Fusion Bakery – Corporate Gifting & Cloud Kitchen Desserts",
    description:
      "Premium corporate gift hampers & gourmet desserts from Fusion Bakery. Order custom gifts & bakery treats online.",
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 400,
        alt: "Fusion Bakery Corporate Gifts & Desserts"
      }
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position='top-center' />{' '}
        <SelectProvider>
          <CartProvider>
            <WishlistProvider>
              <Navbar />

              <ModalSelect />
              <div className='mt-40'>{children}</div>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </SelectProvider>
      </body>
    </html>
  );
}
