import { Poppins } from 'next/font/google';
import { Blinker } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const blinker = Blinker({
  subsets: ['latin'],
  //   latin-ext
  weight: '300',
});

export const giorgioSans = localFont({
  src: '../public/GiorgioSans-Heavy-Trial.otf',
});

export const blimone = localFont({
  src: [
    {
      path: '../public/Blimone-BoldInktrap.otf',
      weight: '700',
    },
    {
      path: '../public/Blimone-ExtraBoldInktrap.otf',
      weight: '800',
    },
  ],
});
