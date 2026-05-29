import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { pricingCategories } from "../data/siteData";

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState(pricingCategories[0].id);
  const activeCategory = pricingCategories.find((category) => category.id === selectedCategory);

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear premium pricing helps the website feel trustworthy, modern, and easy to book from."
        description="The pricing page balances clarity with luxury presentation so visitors know what to expect before they contact the salon."
      />

      <section className="section">
        <div className="container pricing-layout">
          <Reveal className="pricing-tabs">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                className={category.id === selectedCategory ? "pricing-tab active" : "pricing-tab"}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </Reveal>

          <Reveal className="glass-card pricing-panel" delay={120}>
            <p className="eyebrow">{activeCategory.label}</p>
            <h2>{activeCategory.title}</h2>
            <p className="section-copy">{activeCategory.description}</p>
            <div className="pricing-list">
              {activeCategory.items.map((item) => (
                <article key={item.name} className="pricing-item">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.note}</p>
                  </div>
                  <strong>{item.price}</strong>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Booking Notes"
            title="A few practical notes keep expectations clear without making the page feel heavy."
          />
          <div className="card-grid three-up">
            {[
              "Color corrections are priced after consultation.",
              "Bridal styling packages can be customized for events.",
              "Hair treatment recommendations are based on hair condition and goals."
            ].map((note, index) => (
              <Reveal key={note} delay={index * 100}>
                <article className="glass-card note-card">
                  <p>{note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}