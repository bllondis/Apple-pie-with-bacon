import { motion } from "framer-motion";

const words =
  "A pie should not be polite. Render the bacon until it snaps, glaze it in maple, then weave it through apples that have been cooked down in butter, brown sugar and a splash of bourbon. The salt does what salt always does — it makes the sweet louder.".split(
    " ",
  );

export function StorySection() {
  return (
    <section id="story" className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-eyebrow text-muted-foreground mb-10"
        >
          (01) The idea
        </motion.p>
        <p className="font-display text-3xl md:text-5xl italic leading-[1.25] flex flex-wrap gap-x-3 gap-y-1">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={{ opacity: 0.12 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0px -30% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.015 }}
            >
              {w}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
