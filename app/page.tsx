"use client"

import AboutUsSection from "@/components/about-us-section";
import { Gallery4, Gallery4Props } from "@/components/cardTrips";
import Explore from "@/components/Explore";
import ExploreMore from "@/components/ExploreMore";
import GallerySlider from "@/components/GallerySlider";
import GetWithUs from "@/components/GetWithUs";
import OurBlog from "@/components/OurBlog";
import { DemoOne } from "./demo";
import Form from "@/components/form";
import HotAirHero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";


export default function Home() {
  const demoData: Gallery4Props = {
    title: "Projects",
    description:
      "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
    items: [
      {
        id: "shadcn-ui",
        title: "shadcn/ui: Building a Modern Component Library",
        description:
          "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
        href: "https://ui.shadcn.com",
        image:
          "/img/hero2.jpg",
      },
      {
        id: "tailwind",
        title: "Tailwind CSS: The Utility-First Revolution",
        description:
          "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
        href: "https://tailwindcss.com",
        image:
          "/img/hero2.jpg",
      },
      {
        id: "astro",
        title: "Astro: The All-in-One Web Framework",
        description:
          "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
        href: "https://astro.build",
        image:
          "/img/hero2.jpg",
      },
      {
        id: "react",
        title: "React: Pioneering Component-Based UI",
        description:
          "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
        href: "https://react.dev",
        image:
          "/img/hero2.jpg",
      },
      {
        id: "nextjs",
        title: "Next.js: The React Framework for Production",
        description:
          "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
        href: "https://nextjs.org",
        image:
          "/img/hero2.jpg",
      },
    ],
  };
  return (
    <>
      <HotAirHero
        slides={[
          { image: "/img/hero.jpg" },
          { image: "/img/hero1.jpg" },
          { image: "/img/hero2.jpg" },
          { image: "/img/hero3.jpg" },
        ]}
        autoPlay
        interval={2000}
      />
      <AboutUsSection />
      <Explore />
      <Gallery4 {...demoData} />
      <GetWithUs />
      <ExploreMore />
      <GallerySlider />
      <OurBlog />
      <DemoOne />
      <Form />
      <ScrollToTop />
    </>
  );
}
