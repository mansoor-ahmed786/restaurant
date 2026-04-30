'use client';

import {useMemo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {categories, type MenuCategory, type MenuItem} from '@/data/menu';
import {MenuCard} from './menu-card';

export function InteractiveMenu({items}: {items: MenuItem[]}) {
  const t = useTranslations('menu');
  const [active, setActive] = useState<MenuCategory | 'all'>('all');
  const filtered = useMemo(
    () => (active === 'all' ? items : items.filter((item) => item.category === active)),
    [active, items]
  );

  return (
    <div className="mt-10">
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Menu filters">
        {(['all', ...categories] as const).map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className={`min-h-11 shrink-0 rounded-md px-4 text-sm font-bold capitalize transition ${
              active === category
                ? 'bg-primary text-neutral-950'
                : 'border border-neutral-950/10 text-neutral-700 hover:border-primary dark:border-cream/15 dark:text-cream/80'
            }`}
          >
            {category === 'all' ? t('all') : category}
          </button>
        ))}
      </div>
      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, scale: 0.96}}
              transition={{duration: 0.24, ease: 'easeOut'}}
            >
              <MenuCard item={item} priority={index < 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
