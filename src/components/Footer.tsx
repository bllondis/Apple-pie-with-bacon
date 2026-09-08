import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-24 md:py-32 border-t border-border grain">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-[9rem] italic leading-[0.9] text-balance"
        >
          Go bake it.
        </motion.h2>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-6 text-eyebrow text-muted-foreground">
          <span>Smoke &amp; Sugar — Recipe No. 01</span>
          <span>Apple pie with bacon</span>
          <span>Serves 8, feeds 4</span>
        </div>
      </div>
    </footer>
  );
}
