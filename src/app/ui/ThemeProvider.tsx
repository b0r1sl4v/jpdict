'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as GravityThemeProvider } from '@gravity-ui/uikit';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <GravityThemeProvider theme="light">{children}</GravityThemeProvider>;
};
