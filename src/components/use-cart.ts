'use client';

import {useContext} from 'react';
import {CartContext} from './app-shell';

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside AppShell');
  }

  return context;
}
