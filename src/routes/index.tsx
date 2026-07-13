import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/CTA";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
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
      <HowIWork />
      <CTA />
    </>
  );
}

