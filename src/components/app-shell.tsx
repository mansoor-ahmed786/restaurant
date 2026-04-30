'use client';

import React, {useMemo, useState} from 'react';
import {CartDrawer} from './cart-drawer';
import {Navbar} from './navbar';
import {BookingModal} from './booking-modal';
import type {MenuItem} from '@/data/menu';

export type CartLine = MenuItem & {quantity: number};

export function AppShell({children}: {children: React.ReactNode}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  function addToCart(item: MenuItem) {
    setCart((current) => {
      const existing = current.find((line) => line.id === item.id);
      if (existing) {
        return current.map((line) =>
          line.id === item.id ? {...line, quantity: line.quantity + 1} : line
        );
      }
      return [...current, {...item, quantity: 1}];
    });
    setIsCartOpen(true);
  }

  function removeFromCart(itemId: string) {
    setCart((current) => current.filter((line) => line.id !== itemId));
  }

  return (
    <CartContext.Provider value={{cart, cartCount, addToCart, removeFromCart}}>
      <Navbar
        cartCount={cartCount}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      {children}
      <BookingModal open={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <CartDrawer
        open={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />
    </CartContext.Provider>
  );
}

export const CartContext = React.createContext<{
  cart: CartLine[];
  cartCount: number;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
} | null>(null);
