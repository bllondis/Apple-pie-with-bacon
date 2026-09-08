import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { IngredientsSection } from "@/components/IngredientsSection";
import { MethodSection } from "@/components/MethodSection";
import { ServeSection } from "@/components/ServeSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apple Pie with Bacon — Smoke & Sugar Recipe No. 01" },
      {
        name: "description",
        content:
          "Bourbon-caramel apples under a maple-lacquered bacon lattice. Full ingredients, six-step method and serving notes for a salted-sweet apple bacon pie.",
      },
      { property: "og:title", content: "Apple Pie with Bacon — Smoke & Sugar" },
      {
        property: "og:description",
        content:
          "Bourbon-caramel apples under a maple-lacquered bacon lattice. A salted-sweet apple pie, done properly.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
