import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sliceImage from "@/assets/slice.jpg";

const notes = [
  { k: "Pair with", v: "Vanilla bean ice cream, or aged cheddar" },
  { k: "Drink", v: "Cold cider, or a smoky old fashioned" },
  { k: "Keeps", v: "3 days covered; reheat at 160°C for 12 min" },
];

export function ServeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="serve" ref={ref} className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[70vh] overflow-hidden">
          <motion.img
            style={{ y }}
            src={sliceImage}
            alt="A slice of apple bacon pie with vanilla ice cream and caramel"
            loading="lazy"
            width={1088}
            height={1360}
            className="absolute inset-0 w-full h-[116%] object-cover"
          />
        </div>

        <div className="flex items-center px-6 md:px-16 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg"
          >
            <p className="text-eyebrow text-muted-foreground mb-6">(04) At the table</p>
            <h2 className="font-display text-5xl md:text-6xl italic leading-[0.95] mb-8">
              Warm, salted, and slightly reckless.
            </h2>
            <p className="text-sm font-light leading-relaxed text-muted-foreground mb-12">
              Cut thick wedges. The lattice should crack under the knife and the caramel should move
              slowly. Anything faster and it needed another hour.
            </p>

            <dl className="border-t border-border">
              {notes.map((n) => (
                <div key={n.k} className="flex justify-between gap-8 border-b border-border py-5">
                  <dt className="text-eyebrow text-muted-foreground pt-1">{n.k}</dt>
                  <dd className="text-sm font-light text-right max-w-xs">{n.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
