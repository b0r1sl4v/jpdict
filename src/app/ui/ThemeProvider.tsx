'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as GravityThemeProvider } from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <GravityThemeProvider theme="light">{children}</GravityThemeProvider>;
};
