export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading fade-in-up">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}