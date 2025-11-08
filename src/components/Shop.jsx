import { useMemo, useState } from 'react';
import { Search, Filter } from 'lucide-react';

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'Dark Magician',
    category: 'Monster',
    price: 24.99,
    rarity: 'Ultra Rare',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Blue-Eyes White Dragon',
    category: 'Monster',
    price: 39.99,
    rarity: 'Secret Rare',
    image:
      'https://images.unsplash.com/photo-1542206363-9b6f8b1b0a3b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Monster Reborn',
    category: 'Spell',
    price: 8.99,
    rarity: 'Rare',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Mirror Force',
    category: 'Trap',
    price: 5.5,
    rarity: 'Common',
    image:
      'https://images.unsplash.com/photo-1542751371-ccb38cfa37d8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Exodia the Forbidden One',
    category: 'Rare Cards',
    price: 99.99,
    rarity: 'Collector\'s Rare',
    image:
      'https://images.unsplash.com/photo-1542751371-5bf79dfd3be2?q=80&w=1200&auto=format&fit=crop',
  },
];

const CATEGORIES = ['All', 'Monster', 'Spell', 'Trap', 'Rare Cards'];

export default function Shop({ onAddToCart }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' ? true : p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section id="shop" className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-radial from-indigo-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Shop Cards</h2>
          <div className="flex-1 md:max-w-xl">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
              <Search className="h-5 w-5 text-white/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent outline-none placeholder:text-white/50"
                placeholder="Search for a card name..."
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-6">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                category === c
                  ? 'bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-amber-400 text-black border-transparent'
                  : 'bg-white/5 hover:bg-white/10 border-white/10'
              }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto hidden md:flex items-center text-white/60 text-sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter by Category
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-300/40 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold tracking-wide">{p.name}</h3>
                  <span className="text-amber-300 font-semibold">${p.price.toFixed(2)}</span>
                </div>
                <p className="text-xs text-white/60 mt-1">{p.category} • {p.rarity}</p>
                <button
                  onClick={() => onAddToCart(p)}
                  className="mt-4 w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 hover:opacity-95 font-semibold text-black"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
