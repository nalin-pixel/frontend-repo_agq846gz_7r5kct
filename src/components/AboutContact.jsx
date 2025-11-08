import { Mail, User } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-amber-400" />
              <h3 className="text-xl font-bold">About the Collector</h3>
            </div>
            <p className="mt-4 text-white/80 leading-relaxed">
              Hey! I'm a passionate duelist who started collecting as a kid, trading cards on the playground and hunting for rares at local shops. Over the years, I've built a curated collection of monsters, spells, and traps — each with a story. This shop is where I share that magic with fellow fans.
            </p>
            <p className="mt-3 text-white/70">
              You'll find authentic cards, clear grading notes, and fair prices. Have a special request or hunting a grail? Reach out — I love helping people complete their decks.
            </p>
          </div>

          <div id="contact" className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400 via-fuchsia-500 to-indigo-500" />
              <h3 className="text-xl font-bold">Contact</h3>
            </div>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm text-white/70">Your Name</label>
                <div className="mt-1 flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <User className="h-4 w-4 text-white/60" />
                  <input className="w-full bg-transparent outline-none" placeholder="Yami Yugi" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <div className="mt-1 flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <Mail className="h-4 w-4 text-white/60" />
                  <input type="email" className="w-full bg-transparent outline-none" placeholder="duelist@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea rows={4} className="mt-1 w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none" placeholder="What card are you looking for?" />
              </div>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 hover:opacity-95 font-semibold text-black">
                Send Message
              </button>
              <p className="text-xs text-white/60">Form is a visual demo in this preview.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
