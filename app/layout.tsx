import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { theme } from '../theme';

export const metadata = {
  title: 'NekoVerse',
  description:
    'Explore the world of anime with NekoVerse, your ultimate source for popular anime series, latest episodes, and comprehensive anime information. Built with Mantine and Next.js for a seamless and beautiful user experience.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
