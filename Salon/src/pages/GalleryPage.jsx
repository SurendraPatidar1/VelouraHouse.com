import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/siteData";

const filterOptions = ["All", "Color", "Cut", "Bridal", "Care"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Use the gallery to sell the finish quality, the salon aesthetic, and the breadth of styling work."
        description="This page includes filtering so visitors can quickly browse the kind of transformation they are most interested in."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Filter Looks"
            title="A small interaction makes the gallery feel more modern and easier to explore."
          />
          <Reveal className="filter-row">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={activeFilter === option ? "filter-chip active" : "filter-chip"}
                onClick={() => setActiveFilter(option)}
              >
                {option}
              </button>
            ))}
          </Reveal>

          <div className="gallery-page-grid">
            {visibleItems.map((item, index) => (
              <Reveal key={item.title} delay={(index % 4) * 70}>
                <article className={`gallery-card ${item.imageClass}`}>
                  <div className="gallery-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}