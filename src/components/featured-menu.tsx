import {MenuCard} from './menu-card';
import type {MenuItem} from '@/data/menu';

export function FeaturedMenu({items}: {items: MenuItem[]}) {
  return (
    <section className="bg-white px-4 py-16 dark:bg-neutral-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Signature plates</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Built for the first bite</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <MenuCard key={item.id} item={item} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
