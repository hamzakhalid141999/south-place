import localFont from 'next/font/local'
import "./globals.css";
import Footer from "@/components/shared/footer";
import Navbar from '@/components/shared/navbar';

const metropolis = localFont({
  src: [
    {
      path: './fonts/metropolis/Metropolis-Thin.otf',
      weight: '100',
      style: 'thin',
    },
    {
      path: './fonts/metropolis/Metropolis-Light.otf',
      weight: '200',
      style: 'light',
    },
    {
      path: './fonts/metropolis/Metropolis-Regular.otf',
      weight: '300',
      style: 'regular',
    },
    {
      path: './fonts/metropolis/Metropolis-Medium.otf',
      weight: '400',
      style: 'medium',
    },
    {
      path: './fonts/metropolis/Metropolis-SemiBold.otf',
      weight: '500',
      style: 'semibold',
    },
    {
      path: './fonts/metropolis/Metropolis-Bold.otf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--metropolis'
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${metropolis.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
