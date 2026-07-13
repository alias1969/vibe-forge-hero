import { createFileRoute } from "@tanstack/react-router";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhatIDo />
    </>
  );
}
