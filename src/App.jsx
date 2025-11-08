import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import AboutContact from './components/AboutContact';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const handleUpdateQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0720] via-[#0b0e2a] to-[#0b0720] text-white selection:bg-indigo-600/40 selection:text-white">
      <Navbar onOpenCart={() => setCartOpen(true)} cartCount={cartItems.reduce((s, p) => s + p.qty, 0)} />
      <main>
        <Hero />
        <Shop onAddToCart={handleAddToCart} />
        <AboutContact />
      </main>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0f1029] shadow-2xl border-l border-white/10">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold tracking-wide">Your Cart</h3>
              <button
                onClick={() => setCartOpen(false)}
                className="rounded-md px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 transition"
              >
                Close
              </button>
            </div>
            <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
              {cartItems.length === 0 ? (
                <p className="text-white/70">Your cart is empty. Add some legendary cards!</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center border border-white/10 rounded-lg p-3">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <span className="text-emerald-300">${(item.price * item.qty).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-white/60">{item.category}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateQty(item.id, -1)}
                          className="h-7 w-7 rounded bg-white/10 hover:bg-white/20"
                        >
                          −
                        </button>
                        <span className="w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => handleUpdateQty(item.id, 1)}
                          className="h-7 w-7 rounded bg-white/10 hover:bg-white/20"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="ml-auto text-xs text-red-300 hover:text-red-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/70">Subtotal</span>
                <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 hover:opacity-95 font-semibold shadow-lg shadow-indigo-500/20">
                Proceed to Checkout
              </button>
              <p className="mt-2 text-xs text-white/60">Checkout is a demo in this preview.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
