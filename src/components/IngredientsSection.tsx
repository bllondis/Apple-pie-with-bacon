import { motion } from "framer-motion";
import applesImage from "@/assets/ingredient-apples.jpg";
import baconImage from "@/assets/ingredient-bacon.jpg";

const groups = [
  {
    no: "01 / Crust",
    items: [
      "320 g plain flour",
      "225 g cold unsalted butter, cubed",
      "1 tsp fine sea salt",
      "1 tbsp caster sugar",
      "80–100 ml ice water",
      "1 egg + 1 tbsp cream, for the wash",
    ],
  },
  {
    no: "02 / Filling",
    items: [
      "1.2 kg tart apples (Bramley, Granny Smith)",
      "120 g dark brown sugar",
      "40 g butter",
      "2 tbsp bourbon (optional, not really)",
      "1½ tsp cinnamon, ¼ tsp nutmeg",
      "2 tbsp cornflour + 1 tbsp lemon juice",
    ],
  },
  {
    no: "03 / Bacon",
    items: [
      "10 rashers thick-cut smoked streaky bacon",
      "3 tbsp maple syrup",
      "½ tsp cracked black pepper",
      "Flaky salt, to finish",
    ],
  },
];

const images = [applesImage, baconImage];

export function IngredientsSection() {
  return (
    <section id="ingredients" className="py-28 md:py-44 px-6 md:px-12 bg-cream text-char">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <p className="text-eyebrow opacity-50 mb-6">(02) What you need</p>
          <h2 className="font-display text-5xl md:text-7xl italic leading-[0.95]">
            Nine ordinary things, one unreasonable pie.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-14">
            {groups.map((g, i) => (
              <motion.div
                key={g.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-eyebrow font-medium mb-5 opacity-50">{g.no}</h3>
                <ul className="divide-y divide-char/10 border-t border-char/10">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="py-3 text-sm font-light tracking-wide transition-colors hover:text-crust"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-6 space-y-10 lg:space-y-20 lg:pt-10">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[4/5] overflow-hidden bg-char/10"
              >
                <img
                  src={src}
                  alt={i === 0 ? "Sliced apples, cinnamon and brown sugar" : "Thick-cut bacon crisping in a skillet"}
                  loading="lazy"
                  width={1088}
                  height={1360}
                  className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
