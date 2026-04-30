import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {InteractiveMenu} from '@/components/interactive-menu';
import {menuItems} from '@/data/menu';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('menu');

  return {
    title: `${t('title')} | Aurum Table`,
    description: t('subtitle'),
    openGraph: {
      title: `${t('title')} | Aurum Table`,
      description: t('subtitle')
    }
  };
}

export default async function MenuPage() {
  const t = await getTranslations('menu');

  return (
    <main className="bg-cream px-4 pb-20 pt-28 dark:bg-neutral-950 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Aurum Table</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-7xl">{t('title')}</h1>
          <p className="mt-5 text-base leading-8 text-neutral-700 dark:text-cream/72 sm:text-lg">
            {t('subtitle')}
          </p>
        </div>
        <InteractiveMenu items={menuItems} />
      </section>
    </main>
  );
}
