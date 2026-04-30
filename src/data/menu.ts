export type MenuCategory = 'starters' | 'mains' | 'desserts' | 'drinks';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  image: string;
  accent: string;
};

export const categories: MenuCategory[] = ['starters', 'mains', 'desserts', 'drinks'];

export const menuItems: MenuItem[] = [
  {
    id: 'ember-prawns',
    name: 'Ember Prawns',
    description: 'Charred prawns, saffron aioli, pickled fennel, and citrus oil.',
    category: 'starters',
    price: 18,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    accent: 'clay'
  },
  {
    id: 'heritage-tomato',
    name: 'Heritage Tomato',
    description: 'Tomato textures, basil seed, sheep ricotta, and aged balsamic.',
    category: 'starters',
    price: 14,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    accent: 'olive'
  },
  {
    id: 'golden-ribeye',
    name: 'Golden Ribeye',
    description: 'Dry-aged ribeye, smoked marrow butter, greens, and pepper jus.',
    category: 'mains',
    price: 44,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    accent: 'primary'
  },
  {
    id: 'black-cod',
    name: 'Miso Black Cod',
    description: 'Silky cod, miso caramel, charred bok choy, and toasted sesame.',
    category: 'mains',
    price: 38,
    image: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=1200&q=80',
    accent: 'olive'
  },
  {
    id: 'rose-pavlova',
    name: 'Rose Pavlova',
    description: 'Crisp meringue, rose cream, pistachio, and macerated berries.',
    category: 'desserts',
    price: 13,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
    accent: 'clay'
  },
  {
    id: 'date-fondant',
    name: 'Date Fondant',
    description: 'Warm date cake, salted caramel, tahini crumble, and vanilla bean.',
    category: 'desserts',
    price: 12,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
    accent: 'primary'
  },
  {
    id: 'saffron-spritz',
    name: 'Saffron Spritz',
    description: 'Saffron cordial, citrus, botanicals, and sparkling mineral water.',
    category: 'drinks',
    price: 11,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',
    accent: 'primary'
  },
  {
    id: 'mint-qahwa',
    name: 'Mint Qahwa',
    description: 'Green tea, cardamom, mint, honey, and preserved lemon.',
    category: 'drinks',
    price: 8,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
    accent: 'olive'
  }
];
