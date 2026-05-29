import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { brandValues, teamMembers } from "../data/siteData";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Veloura House"
        title="A modern salon brand built around precision, hospitality, and elevated everyday beauty."
        description="The About page gives clients the confidence that the salon is experienced, intentional, and professionally led."
      />

      <section className="section">
        <div className="container about-grid">
          <Reveal className="glass-card about-story">
            <p className="eyebrow">Our Story</p>
            <h2>Veloura House was shaped for clients who want more than a quick appointment.</h2>
            <p>
              The studio brings together expert color artistry, thoughtful haircare rituals, and a calm luxury atmosphere that makes every visit feel considered.
            </p>
            <p>
              From consultation to finish styling, the salon experience is structured to be clear, comfortable, and worthy of repeat visits.
            </p>
          </Reveal>
          <Reveal className="about-visual image-card image-card-portrait" delay={120}></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Studio Values"
            title="The brand tone stays premium because the service principles stay consistent."
          />
          <div className="card-grid three-up">
            {brandValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <article className="glass-card value-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Salon Team"
            title="Introduce the people behind the service so the salon feels personal as well as professional."
          />
          <div className="card-grid three-up">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <article className="glass-card team-card">
                  <div className={`team-avatar ${member.avatarClass}`}></div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                  <p>{member.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}