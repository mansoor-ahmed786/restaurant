'use client';

import {Dialog, DialogPanel, DialogTitle} from '@headlessui/react';
import {useTranslations} from 'next-intl';
import {X} from 'lucide-react';

export function BookingModal({open, onClose}: {open: boolean; onClose: () => void}) {
  const t = useTranslations('booking');

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-neutral-950/55 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-lg bg-cream p-6 shadow-2xl dark:bg-neutral-950">
          <div className="flex items-center justify-between gap-4">
            <DialogTitle className="text-2xl font-semibold">{t('title')}</DialogTitle>
            <button
              type="button"
              aria-label={t('close')}
              onClick={onClose}
              className="grid size-10 place-items-center rounded-md border border-neutral-950/10 dark:border-cream/15"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <form className="mt-6 grid gap-4">
            {[
              ['date', 'date'],
              ['time', 'time'],
              ['guests', 'number'],
              ['name', 'text']
            ].map(([field, type]) => (
              <label key={field} className="grid gap-2 text-sm font-semibold">
                {t(field)}
                <input
                  required
                  min={field === 'guests' ? 1 : undefined}
                  max={field === 'guests' ? 12 : undefined}
                  type={type}
                  className="min-h-12 rounded-md border border-neutral-950/12 bg-white px-3 text-neutral-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
            ))}
            <button
              type="submit"
              className="mt-2 min-h-12 rounded-md bg-primary px-5 font-bold text-neutral-950 transition hover:bg-primary-100"
            >
              {t('confirm')}
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
