import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[70vh] md:h-[80vh] lg:h-[85vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0720]/30 via-[#0b0e2a]/50 to-[#0b0720] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid place-items-center text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-amber-300">
              Summon Legendary Cards
            </span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Dive into a magical marketplace of monsters, spells, and traps. Curated by a lifelong duelist.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#shop" className="px-5 py-3 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 font-semibold shadow-lg shadow-indigo-500/30">
              Explore Shop
            </a>
            <a href="#about" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 font-semibold">
              About the Collector
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
