export default function PageHero({ eyebrow, title, description, align = "left" }) {
  return (
    <section className={`page-hero page-hero-${align}`}>
      <div className="container">
        <div className="page-hero-card fade-in-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="section-copy page-hero-copy">{description}</p>
        </div>
      </div>
    </section>
  );
}