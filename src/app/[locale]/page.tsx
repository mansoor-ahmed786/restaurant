import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Award, Clock, Leaf} from 'lucide-react';
import {Link} from '@/i18n/routing';
import {FeaturedMenu} from '@/components/featured-menu';
import {menuItems} from '@/data/menu';

export default async function HomePage() {
  const t = await getTranslations();
  const featured = menuItems.slice(0, 3);

  return (
    <main>
      <section className="relative min-h-[88svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2200&q=80"
          alt="Elegant restaurant dining room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/88 via-neutral-950/52 to-neutral-950/12" />
        <div className="relative flex min-h-[88svh] items-center px-4 pb-20 pt-28 sm:px-6 lg:px-10">
          <div className="max-w-3xl text-cream">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {t('hero.eyebrow')}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-none text-primary drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-6xl lg:text-8xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)] sm:text-lg">
              {t('hero.copy')}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#reserve"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-bold text-neutral-950 transition hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {t('hero.cta')}
              </a>
              <Link
                href="/menu"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-primary bg-neutral-950/72 px-6 text-sm font-bold text-primary shadow-[0_12px_36px_rgba(0,0,0,0.42)] backdrop-blur-md transition hover:bg-primary hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {t('hero.menu')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-cream px-4 py-16 dark:bg-neutral-950 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ['Seasonal sourcing', Leaf],
            ['Awarded cellar', Award],
            ['Open late', Clock]
          ].map(([label, Icon]) => (
            <div key={label as string} className="border-t border-neutral-950/15 pt-6 dark:border-cream/15">
              <Icon className="mb-5 size-7 text-primary" aria-hidden="true" />
              <h2 className="text-xl font-semibold">{label as string}</h2>
              <p className="mt-3 leading-7 text-neutral-700 dark:text-cream/70">
                Focused service, steady pacing, and dishes designed to arrive beautifully on every screen and every table.
              </p>
            </div>
          ))}
        </div>
      </section>

      <FeaturedMenu items={featured} />
      <div id="reserve" className="h-1" aria-hidden="true" />
    </main>
  );
}
