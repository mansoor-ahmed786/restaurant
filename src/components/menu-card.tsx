'use client';

import Image from 'next/image';
import {Plus} from 'lucide-react';
import {useTranslations} from 'next-intl';
import type {MenuItem} from '@/data/menu';
import {useCart} from './use-cart';

export function MenuCard({item, priority = false}: {item: MenuItem; priority?: boolean}) {
  const t = useTranslations('menu');
  const {addToCart} = useCart();

  return (
    <article className="group overflow-hidden rounded-lg border border-neutral-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-cream/10 dark:bg-white/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 dark:bg-neutral-900">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{item.category}</p>
            <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
          </div>
          <p className="text-lg font-bold">${item.price}</p>
        </div>
        <p className="mt-3 min-h-20 leading-7 text-neutral-700 dark:text-cream/70">{item.description}</p>
        <button
          type="button"
          onClick={() => addToCart(item)}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-neutral-950 px-4 text-sm font-bold text-cream transition hover:bg-primary hover:text-neutral-950 dark:bg-primary dark:text-neutral-950"
        >
          <Plus className="size-4" aria-hidden="true" />
          {t('add')}
        </button>
      </div>
    </article>
  );
}
