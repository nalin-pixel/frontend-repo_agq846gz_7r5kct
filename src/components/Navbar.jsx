import { ShoppingCart, Swords, Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onOpenCart, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0b0e2a]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-amber-400 grid place-items-center shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm tracking-widest text-amber-300">Dueler's</div>
              <div className="text-lg font-semibold -mt-1">Arcana Vault</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-amber-300 transition">Home</a>
            <a href="#shop" className="hover:text-amber-300 transition">Shop</a>
            <a href="#about" className="hover:text-amber-300 transition">About</a>
            <a href="#contact" className="hover:text-amber-300 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative rounded-full p-2 bg-white/5 hover:bg-white/10 transition"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-amber-400 text-black text-xs grid place-items-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden rounded-full p-2 bg-white/5 hover:bg-white/10"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Swords className="h-5 w-5" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex items-center gap-2 p-2 rounded-md bg-white/5">
              <Search className="h-4 w-4 text-white/60" />
              <input
                className="w-full bg-transparent outline-none placeholder:text-white/50"
                placeholder="Search cards..."
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
              <a href="#shop" className="p-2 rounded bg-white/5">Shop</a>
              <a href="#about" className="p-2 rounded bg-white/5">About</a>
              <a href="#contact" className="p-2 rounded bg-white/5">Contact</a>
              <a href="#home" className="p-2 rounded bg-white/5">Home</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
