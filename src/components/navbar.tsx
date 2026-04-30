'use client';

import {useEffect, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {useTheme} from 'next-themes';
import {CalendarCheck, Moon, ShoppingBag, Sun, Utensils} from 'lucide-react';
import {Link, usePathname, useRouter} from '@/i18n/routing';
import {routing, type Locale} from '@/i18n/routing';

type NavbarProps = {
  cartCount: number;
  onOpenBooking: () => void;
  onOpenCart: () => void;
};

export function Navbar({cartCount, onOpenBooking, onOpenCart}: NavbarProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const {theme, setTheme} = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className={`glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-3 transition-all duration-300 sm:px-5 ${
          scrolled ? 'min-h-14 shadow-lg' : 'min-h-20 shadow-glow'
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3 font-semibold">
          <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-neutral-950">
            <Utensils className="size-5" aria-hidden="true" />
          </span>
          <span className="truncate text-base sm:text-lg">{t('brand')}</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            {t('nav.home')}
          </Link>
          <Link href="/menu" className="text-sm font-medium hover:text-primary">
            {t('nav.menu')}
          </Link>
          <a href="#experience" className="text-sm font-medium hover:text-primary">
            {t('nav.experience')}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <select
            aria-label="Language"
            value={locale}
            onChange={(event) => router.replace(pathname, {locale: event.target.value as Locale})}
            className="h-10 rounded-md border border-primary/70 bg-white px-2 text-sm font-bold text-neutral-950 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/35 dark:bg-neutral-950 dark:text-cream"
          >
            {routing.locales.map((item) => (
              <option key={item} value={item} className="bg-white text-neutral-950 dark:bg-neutral-950 dark:text-cream">
                {item.toUpperCase()}
              </option>
            ))}
          </select>
          <button
            type="button"
            aria-label={t('theme')}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="grid size-10 place-items-center rounded-md border border-neutral-950/10 transition hover:border-primary dark:border-cream/15"
          >
            <Sun className="hidden size-5 dark:block" aria-hidden="true" />
            <Moon className="size-5 dark:hidden" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={t('cart.title')}
            onClick={onOpenCart}
            className="relative grid size-10 place-items-center rounded-md border border-neutral-950/10 transition hover:border-primary dark:border-cream/15"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-primary text-xs font-bold text-neutral-950">
                {cartCount}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-neutral-950 px-3 text-sm font-bold text-cream transition hover:bg-primary hover:text-neutral-950 dark:bg-primary dark:text-neutral-950"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t('nav.reserve')}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
