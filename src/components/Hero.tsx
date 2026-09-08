import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-pie.jpg";

const meta = [
  { k: "Serves", v: "8" },
  { k: "Prep", v: "40 min" },
  { k: "Bake", v: "55 min" },
  { k: "Level", v: "Intermediate" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);

  const reveal = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: {
        duration: 1.4,
        delay: 0.25 + i * 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain"
    >
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 opacity-55">
        <img
          src={heroImage}
          alt="Lattice apple pie woven with caramelized bacon, steaming on dark stone"
          width={1088}
          height={1600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
      </motion.div>

      <div className="relative z-10 text-center px-6 pt-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-eyebrow text-ember mb-8"
        >
          Recipe No. 01 — Sweet meets smoke
        </motion.p>

        <h1 className="font-display text-6xl sm:text-7xl md:text-[9rem] lg:text-[11rem] leading-[0.88] italic text-balance">
          {["Apple Pie", "with Bacon"].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span custom={i} variants={reveal} initial="hidden" animate="show" className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ delay: 1.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md mx-auto mt-10 text-sm font-light leading-relaxed tracking-wide"
        >
          Bourbon-caramel apples under a lattice of maple-lacquered bacon.
          Salt, smoke and sugar in the same forkful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-6 border-t border-border pt-8 max-w-2xl mx-auto"
        >
          {meta.map((m) => (
            <div key={m.k} className="text-center">
              <p className="text-eyebrow text-muted-foreground mb-2">{m.k}</p>
              <p className="font-display text-2xl italic">{m.v}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-transparent to-cream/40 origin-top"
        />
        <span className="text-[9px] uppercase tracking-[0.3em] opacity-40">Scroll</span>
      </motion.div>
    </section>
  );
}
