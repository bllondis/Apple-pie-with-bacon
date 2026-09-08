import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { IngredientsSection } from "@/components/IngredientsSection";
import { MethodSection } from "@/components/MethodSection";
import { ServeSection } from "@/components/ServeSection";
import { Footer } from "@/components/Footer";
import { getSiteOrigin } from "@/lib/site-url";

const TITLE = "Apple Pie with Bacon — Smoke & Sugar Recipe No. 01";
const DESCRIPTION =
  "Bourbon-caramel apples under a maple-lacquered bacon lattice. Full ingredients, six-step method and serving notes for a salted-sweet apple bacon pie.";
const SOCIAL_TITLE = "Apple Pie with Bacon — Smoke & Sugar";
const SOCIAL_DESCRIPTION =
  "Bourbon-caramel apples under a maple-lacquered bacon lattice. A salted-sweet apple pie, done properly.";

// Mirrors the copy rendered by IngredientsSection and MethodSection — keep the
// two in step, since structured data that contradicts the page is worse than none.
function recipeJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: "Apple Pie with Bacon",
    description: SOCIAL_DESCRIPTION,
    image: [`${origin}/og-image.jpg`],
    author: { "@type": "Organization", name: "Smoke & Sugar" },
    recipeCategory: "Dessert",
    recipeCuisine: "American",
    keywords: "apple pie, bacon, bourbon caramel, maple, lattice pie",
    recipeYield: "8 servings",
    prepTime: "PT40M",
    cookTime: "PT55M",
    totalTime: "PT1H35M",
    recipeIngredient: [
      "320 g plain flour",
      "225 g cold unsalted butter, cubed",
      "1 tsp fine sea salt",
      "1 tbsp caster sugar",
      "80–100 ml ice water",
      "1 egg + 1 tbsp cream, for the wash",
      "1.2 kg tart apples (Bramley, Granny Smith)",
      "120 g dark brown sugar",
      "40 g butter",
      "2 tbsp bourbon",
      "1½ tsp cinnamon, ¼ tsp nutmeg",
      "2 tbsp cornflour + 1 tbsp lemon juice",
      "10 rashers thick-cut smoked streaky bacon",
      "3 tbsp maple syrup",
      "½ tsp cracked black pepper",
      "Flaky salt, to finish",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        name: "Make the pastry",
        text: "Rub the cold butter into the flour, salt and sugar until you have coarse, uneven flakes — visible butter is the point. Bind with ice water, halve, flatten into discs and chill for at least one hour.",
      },
      {
        "@type": "HowToStep",
        name: "Candy the bacon",
        text: "Lay the rashers on a rack, brush with maple and pepper, and bake at 180°C for 18–22 minutes until lacquered and just short of brittle. Cool on the rack.",
      },
      {
        "@type": "HowToStep",
        name: "Cook the apples",
        text: "Melt butter with brown sugar, add the sliced apples and spices, and cook 8 minutes until they slump but still hold their edges. Deglaze with bourbon, thicken with cornflour slurry, cool completely.",
      },
      {
        "@type": "HowToStep",
        name: "Weave the lattice",
        text: "Line the tin, fill, then alternate strips of pastry and bacon over the top in a proper over-under weave. Trim, crimp hard, brush with egg wash and scatter sugar.",
      },
      {
        "@type": "HowToStep",
        name: "Bake it dark",
        text: "220°C for 20 minutes, then 190°C for 30–35 more until the juices bubble thickly through the lattice. If the bacon darkens too fast, tent with foil.",
      },
      {
        "@type": "HowToStep",
        name: "Wait",
        text: "Rest at least three hours. A hot pie is a soup. Finish with flaky salt just before the first slice.",
      },
    ],
  };
}

export const Route = createFileRoute("/")({
  loader: () => ({ origin: getSiteOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/`;

    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: SOCIAL_TITLE },
        { property: "og:description", content: SOCIAL_DESCRIPTION },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(recipeJsonLd(origin)),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <Nav />
      <Hero />
      <StorySection />
      <IngredientsSection />
      <MethodSection />
      <ServeSection />
      <Footer />
    </main>
  );
}
