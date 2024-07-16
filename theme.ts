'use client';

import { createTheme } from '@mantine/core';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  fontFamily: poppins.style.fontFamily,
  colors: {
    nekoColors: [
      '#4B0082',
      '#6A0DAD',
      '#8A2BE2',
      '#9400D3',
      '#9932CC',
      '#DDA0DD',
      '#BA55D3',
      '#9370DB',
      '#7B68EE',
      '#000000',
    ],
    text: [
      '#FFFFFF',
      '#FFD700',
      '#FFB6C1',
      '#00FFFF',
      '#ADFF2F',
      '#FF69B4',
      '#FFFF00',
      '#00FF00',
      '#FF6347',
      '#FFFFFF',
    ],
  },
  black: '#2C2C2C',
  autoContrast: true,
  shadows: {
    md: '1px 1px 3px rgba(255, 255, 255, 0.15)',
    xl: '5px 5px 3px rgba(255, 255, 255, 0.15)',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  white: '#FFFFFF',
  primaryColor: 'nekoColors',
  radius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  defaultRadius: 16,
  headings: {
    fontFamily: poppins.style.fontFamily,
    sizes: {
      h1: { fontSize: '32px', fontWeight: '700' },
      h2: { fontSize: '28px', fontWeight: '500' },
      h3: { fontSize: '24px', fontWeight: '500' },
      h4: { fontSize: '20px', fontWeight: '500' },
    },
  },
});
