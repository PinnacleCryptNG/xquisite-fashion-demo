import { BrandStory } from "@/components/home/BrandStory";
import { Collections } from "@/components/home/Collections";
import { EditorialSection } from "@/components/home/EditorialSection";
import { Hero } from "@/components/home/Hero";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { LookbookPreview } from "@/components/home/LookbookPreview";
import { NewArrivals } from "@/components/home/NewArrivals";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <EditorialSection />
      <Collections />
      <LookbookPreview />
      <BrandStory />
      <WhatsAppCTA />
      <InstagramGrid />
    </>
  );
}
