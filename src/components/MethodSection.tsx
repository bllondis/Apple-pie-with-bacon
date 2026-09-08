import { motion } from "framer-motion";

const steps = [
  {
    n: "I",
    t: "Make the pastry",
    b: "Rub the cold butter into the flour, salt and sugar until you have coarse, uneven flakes — visible butter is the point. Bind with ice water, halve, flatten into discs and chill for at least one hour.",
  },
  {
    n: "II",
    t: "Candy the bacon",
    b: "Lay the rashers on a rack, brush with maple and pepper, and bake at 180°C for 18–22 minutes until lacquered and just short of brittle. Cool on the rack. Eat one. Then stop.",
  },
  {
    n: "III",
    t: "Cook the apples",
    b: "Melt butter with brown sugar, add the sliced apples and spices, and cook 8 minutes until they slump but still hold their edges. Deglaze with bourbon, thicken with cornflour slurry, cool completely.",
  },
  {
    n: "IV",
    t: "Weave the lattice",
    b: "Line the tin, fill, then alternate strips of pastry and bacon over the top in a proper over-under weave. Trim, crimp hard, brush with egg wash and scatter sugar.",
  },
  {
    n: "V",
    t: "Bake it dark",
    b: "220°C for 20 minutes, then 190°C for 30–35 more until the juices bubble thickly through the lattice. If the bacon darkens too fast, tent with foil.",
  },
  {
    n: "VI",
    t: "Wait",
    b: "Rest at least three hours. A hot pie is a soup. Finish with flaky salt just before the first slice.",
  },
];

export function MethodSection() {
  return (
    <section id="method" className="relative py-32 md:py-48 px-6 md:px-12 grain">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <p className="text-eyebrow text-muted-foreground mb-6">(03) Method</p>
          <h2 className="font-display text-5xl md:text-7xl italic leading-[0.95]">
            Six moves, in order, without hurrying.
          </h2>
        </motion.div>

        <div className="border-t border-border">
          {steps.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 border-b border-border py-10 md:py-14 transition-colors hover:bg-secondary/40"
            >
              <div className="md:col-span-2">
                <span className="font-display text-4xl italic text-ember">{s.n}</span>
              </div>
              <h3 className="md:col-span-4 font-display text-3xl md:text-4xl italic">{s.t}</h3>
              <p className="md:col-span-6 text-sm font-light leading-relaxed text-muted-foreground max-w-xl">
                {s.b}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
