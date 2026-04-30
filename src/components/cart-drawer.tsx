'use client';

import {Dialog, DialogPanel, DialogTitle} from '@headlessui/react';
import {useTranslations} from 'next-intl';
import {Trash2, X} from 'lucide-react';
import type {CartLine} from './app-shell';

export function CartDrawer({
  open,
  cart,
  onClose,
  onRemove
}: {
  open: boolean;
  cart: CartLine[];
  onClose: () => void;
  onRemove: (itemId: string) => void;
}) {
  const t = useTranslations('cart');
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-neutral-950/45" aria-hidden="true" />
      <div className="fixed inset-y-0 right-0 flex w-full justify-end sm:max-w-md">
        <DialogPanel className="flex h-full w-full flex-col bg-cream p-5 shadow-2xl dark:bg-neutral-950">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold">{t('title')}</DialogTitle>
            <button
              type="button"
              aria-label="Close cart"
              onClick={onClose}
              className="grid size-10 place-items-center rounded-md border border-neutral-950/10 dark:border-cream/15"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-7 flex-1 space-y-4 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-neutral-700 dark:text-cream/70">{t('empty')}</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 border-b border-neutral-950/10 pb-4 dark:border-cream/10"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-neutral-700 dark:text-cream/70">x{item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-bold">${item.price * item.quantity}</p>
                    <button
                      type="button"
                      aria-label={`${t('remove')} ${item.name}`}
                      onClick={() => onRemove(item.id)}
                      className="grid size-9 place-items-center rounded-md border border-neutral-950/10 text-neutral-700 transition hover:border-red-500 hover:text-red-600 dark:border-cream/15 dark:text-cream/70"
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="border-t border-neutral-950/10 pt-5 dark:border-cream/10">
            <div className="mb-4 flex items-center justify-between text-lg font-semibold">
              <span>{t('total')}</span>
              <span>${total}</span>
            </div>
            <button className="min-h-12 w-full rounded-md bg-primary px-5 font-bold text-neutral-950">
              {t('checkout')}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
