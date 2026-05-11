import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-900/95 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white font-serif text-2xl tracking-widest font-light"
        >
          L'ESSENCE
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          {['Accueil', 'Menu', 'Réservation', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-900 border-t border-stone-800 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {['Accueil', 'Menu', 'Réservation', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-stone-300 uppercase tracking-widest text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Restaurant Interior"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-stone-300 uppercase tracking-[0.4em] text-sm mb-6 block"
        >
          Bienvenue à Toulon
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif text-white mb-8 font-light"
        >
          L'Essence du Goût
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-stone-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          Une expérience gastronomique au cœur de la Flandre Française, mariant tradition et modernité.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#reservation" className="px-10 py-4 bg-white text-stone-900 uppercase tracking-widest text-xs font-bold hover:bg-stone-200 transition-colors">
            Réserver une table
          </a>
          <a href="#menu" className="px-10 py-4 border border-white/30 text-white uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors">
            Voir la carte
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const MenuSection = () => {
  const menuItems = [
    { name: "Noix de Saint-Jacques", price: "24€", desc: "Saisies au beurre de noisette, mousseline de panais." },
    { name: "Bœuf Simmental", price: "38€", desc: "Filet maturé, réduction au vin de Bordeaux, petits légumes de saison." },
    { name: "Cabillaud Royal", price: "32€", desc: "Cuit à basse température, infusion de citronnelle et gingembre." },
    { name: "Sphère Chocolat", price: "16€", desc: "Cœur fondant framboise, éclat de pistache et sauce chocolat chaud." }
  ];

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-stone-500 uppercase tracking-widest text-xs mb-4 block font-bold">La Carte du Chef</span>
            <h2 className="text-5xl font-serif text-stone-900 mb-12">Créations de saison</h2>
            
            <div className="space-y-10">
              {menuItems.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-medium text-stone-800 group-hover:text-stone-600 transition-colors uppercase tracking-wide">{item.name}</h3>
                    <div className="flex-grow mx-4 border-b border-stone-200 border-dotted" />
                    <span className="text-lg font-serif italic text-stone-500">{item.price}</span>
                  </div>
                  <p className="text-stone-500 font-light italic">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="mt-12 flex items-center text-xs uppercase tracking-[0.2em] font-bold text-stone-900 group">
              Découvrir tout le menu <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" className="w-full h-2/3 object-cover rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" className="w-full h-1/3 object-cover rounded-sm" referrerPolicy="no-referrer" />
            </div>
            <div className="pt-12 space-y-4">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600" className="w-full h-1/2 object-cover rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1551218808-94e220e031ff?auto=format&fit=crop&q=80&w=600" className="w-full h-1/2 object-cover rounded-sm" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  return (
    <section id="réservation" className="py-24 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif mb-6">Réserver une expérience</h2>
        <p className="text-stone-400 font-light mb-12 max-w-xl mx-auto">
          Pour vous assurer une table d'exception, nous vous recommandons de réserver au moins 48 heures à l'avance.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Nom Complet</label>
            <input type="text" className="w-full bg-stone-800 border border-stone-700 px-4 py-3 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Jean Dupont" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Email</label>
            <input type="email" className="w-full bg-stone-800 border border-stone-700 px-4 py-3 focus:outline-none focus:border-stone-500 transition-colors" placeholder="jean@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Date</label>
            <input type="date" className="w-full bg-stone-800 border border-stone-700 px-4 py-3 focus:outline-none focus:border-stone-500 transition-colors appearance-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Personnes</label>
            <select className="w-full bg-stone-800 border border-stone-700 px-4 py-3 focus:outline-none focus:border-stone-500 transition-colors appearance-none">
              <option>2 Personnes</option>
              <option>3 Personnes</option>
              <option>4 Personnes</option>
              <option>Plus de 5</option>
            </select>
          </div>
          <div className="md:col-span-2 mt-6">
            <button className="w-full py-4 bg-white text-stone-900 font-bold uppercase tracking-widest text-xs hover:bg-stone-200 transition-colors">
              Confirmer la demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <MapPin size={32} className="mx-auto mb-6 text-stone-400 font-light" />
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Localisation</h3>
          <p className="text-stone-600 font-light leading-relaxed">
            15 Avenue de la Marine<br />
            83000 Toulon, France
          </p>
        </div>
        <div className="text-center border-x border-stone-100 hidden md:block">
          <Phone size={32} className="mx-auto mb-6 text-stone-400 font-light" />
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Contact</h3>
          <p className="text-stone-600 font-light leading-relaxed">
            03 20 00 00 00<br />
            contact@lessence-lille.fr
          </p>
        </div>
        <div className="text-center">
          <Clock size={32} className="mx-auto mb-6 text-stone-400 font-light" />
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-4">Horaires</h3>
          <p className="text-stone-600 font-light leading-relaxed">
            Mar - Sam: 19h00 - 23h00<br />
            Dim: 12h00 - 15h00
          </p>
        </div>
      </div>
    </section>
  );
};

export const RestaurantSite = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-stone-900 selection:text-white">
      <Navbar />
      <Hero />
      <MenuSection />
      <Reservation />
      <ContactInfo />
      <footer className="py-12 bg-stone-50 border-t border-stone-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-8">
            <Instagram size={20} className="text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
            <Facebook size={20} className="text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-2 font-medium">L'ESSENCE</p>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-loose">
            &copy; 2024 L'Essence Toulon. Tous droits réservés. <br />
            Conception par Aissam - Développeur Web
          </p>
        </div>
      </footer>
    </div>
  );
};
