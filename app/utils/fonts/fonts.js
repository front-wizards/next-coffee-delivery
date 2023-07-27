import {
    Baloo_2,
    Roboto
  } from 'next/font/google';

  export const baloo2 = Baloo_2({
    weight: ['700','800'],
    style: ['normal'],
    subsets: ['latin'],
  });

  export const roboto = Roboto({
    weight: ['400','500','700','900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  });