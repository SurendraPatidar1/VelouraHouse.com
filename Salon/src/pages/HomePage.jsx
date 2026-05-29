import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import {
  experienceItems,
  galleryHighlights,
  homeMetrics,
  serviceHighlights,
  testimonials
} from "../data/siteData";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Luxury Hair Design</p>
            <h1>Veloura House brings premium salon energy into a modern, elegant online experience.</h1>
            <p className="section-copy hero-text">
              Precision cuts, luminous color work, restorative care, and a sophisticated brand story designed to attract the right clients.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Reserve an Appointment
              </Link>
              <Link className="button button-secondary" to="/gallery">
                View Signature Looks
              </Link>
            </div>
            <div className="metrics-grid">
              {homeMetrics.map((item) => (
                <article key={item.label} className="metric-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={120}>
            <div className="visual-card visual-main">
              <div className="floating-note">Editorial finish</div>
            </div>
            <div className="visual-card visual-panel">
              <p className="panel-label">Why it feels premium</p>
              <h3>Warm consultation, refined interiors, and styling that looks elevated from every angle.</h3>
              <ul>
                <li>Personalized consultation flow</li>
                <li>Luxury service presentation</li>
                <li>Clear booking and follow-up</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container trust-strip fade-in-up">
          <span>Balayage and gloss specialists</span>
          <span>Bridal and occasion styling</span>
          <span>Scalp wellness rituals</span>
          <span>Luxury finish appointments</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Signature Services"
            title="The service mix is structured to feel clear, premium, and conversion-friendly."
            copy="Every service block is designed to help visitors understand what the salon offers and why the experience stands apart."
          />
          <div className="card-grid four-up">
            {serviceHighlights.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <article className="glass-card service-card">
                  <span className="index-badge">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-showcase">
          <Reveal className="split-card image-card image-card-large">
            <div>
              <p className="eyebrow">Interior Mood</p>
              <h2>The salon atmosphere should look just as premium online as it feels in person.</h2>
            </div>
          </Reveal>
          <Reveal className="split-card content-card" delay={140}>
            <p className="eyebrow">Client Experience</p>
            <h2>Clean navigation, intentional content, and subtle animation without overdoing it.</h2>
            <p className="section-copy">
              This layout focuses on trust, visual refinement, and strong calls to action so first-time visitors feel confident booking.
            </p>
            <Link className="button button-secondary" to="/about">
              Discover the Studio Story
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Clients Return"
            title="A professional salon site should answer the quality question before the client asks it."
          />
          <div className="stack-list">
            {experienceItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className="stack-item glass-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Gallery"
            title="A preview of the brand world, the finish quality, and the salon aesthetic."
          />
          <div className="gallery-preview-grid">
            {galleryHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className={`gallery-tile ${item.imageClass}`}>
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="center-cta fade-in-up">
            <Link className="button button-primary" to="/gallery">
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Client Notes"
            title="The messaging stays polished, but the testimonials still feel personal and credible."
          />
          <div className="card-grid three-up">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 90}>
                <article className="glass-card testimonial-card">
                  <p>“{item.quote}”</p>
                  <strong>{item.name}</strong>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}