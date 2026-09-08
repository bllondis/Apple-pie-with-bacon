import { motion } from "framer-motion";

const links = ["Story", "Ingredients", "Method", "Serve"];

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 md:py-8 mix-blend-difference"
    >
      <a href="#top" className="font-display text-2xl italic tracking-tight text-cream">
        Smoke &amp; Sugar
      </a>
      <div className="hidden md:flex gap-10 text-eyebrow font-light text-cream">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="relative group transition-colors hover:text-ember"
          >
            {l}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-ember transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
      </div>
      <div className="text-eyebrow font-light text-cream md:hidden">Recipe</div>
    </motion.nav>
  );
}
