"use client";
import { useRef, useState, useEffect } from "react";
import Section from "./Section";
import Card from "../Card";
import { Project } from "@/app/types";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Projects = ({ items }: { items: Project[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  // Function to check scroll position
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollLeft(scrollLeft > 0);
      // scrollLeft + clientWidth equals scrollWidth when at the end
      // Use a 1px buffer for sub-pixel rendering issues
      setScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScroll);
      // Initial check
      checkScroll();
    }
    return () => currentRef?.removeEventListener("scroll", checkScroll);
  }, [items]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Section id="projects" title="Projects">
      <div className="relative group w-full">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!scrollLeft}
          className={`absolute -left-5 top-[45%] -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-zinc-800 shadow-lg transition-all 
            ${!scrollLeft ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer hover:scale-110 active:scale-95"}`}
          aria-label="Scroll left"
        >
          <LuChevronLeft size={24} />
        </button>

        {/* The Scroll Container */}
        <div
          ref={scrollRef}
          className="flex w-full snap-inline overflow-x-auto pb-10 scrollbar-hide"
        >
          {items.map((project, index) => (
            <div
              key={index}
              className="w-full shrink-0 snap-center px-2 md:w-1/2 lg:w-1/3"
            >
              <Card item={project} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!scrollRight}
          className={`absolute -right-5 top-[45%] -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-zinc-800 shadow-lg transition-all 
            ${!scrollRight ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer hover:scale-110 active:scale-95"}`}
          aria-label="Scroll right"
        >
          <LuChevronRight size={24} />
        </button>
      </div>
    </Section>
  );
};

export default Projects;