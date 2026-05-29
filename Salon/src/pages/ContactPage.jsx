import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "Precision Cut",
  date: "",
  notes: ""
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        title="The contact page should feel inviting, informative, and ready for real appointment requests."
        description="This page includes a working front-end booking form, salon details, and a clean layout that makes contacting the salon easy."
      />

      <section className="section">
        <div className="container contact-layout">
          <Reveal className="glass-card contact-card">
            <p className="eyebrow">Book a Visit</p>
            <h2>Request an appointment</h2>
            <p className="section-copy">
              Share your preferred service, timing, and hair goals. The form can later be connected to email, Google Forms, or a backend booking system.
            </p>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Full name
                  <input name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                  Phone
                  <input name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                  Service
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option>Precision Cut</option>
                    <option>Color Atelier</option>
                    <option>Scalp Ritual</option>
                    <option>Bridal Styling</option>
                  </select>
                </label>
                <label className="full-span">
                  Preferred date
                  <input name="date" type="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label className="full-span">
                  Notes
                  <textarea
                    name="notes"
                    rows="5"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your hair goals, event date, or preferred timing."
                  ></textarea>
                </label>
              </div>
              <button className="button button-primary" type="submit">
                Send Booking Request
              </button>
              {submitted ? <p className="success-message">Your request has been captured. Connect this form to your preferred backend or Google workflow next.</p> : null}
            </form>
          </Reveal>

          <Reveal className="contact-side" delay={120}>
            <div className="glass-card info-panel">
              <p className="eyebrow">Salon Details</p>
              <h2>Visit Veloura House</h2>
              <ul className="info-list">
                <li>Level 4, Sterling Lane, City Center</li>
                <li>Mon - Sun: 10:00 AM - 8:30 PM</li>
                <li>hello@velourahouse.com</li>
                <li>+91 90000 12345</li>
              </ul>
            </div>

            <div className="glass-card map-panel image-card image-card-map">
              <div>
                <p className="eyebrow">Location Mood</p>
                <h3>Prepared for map embed or location card integration.</h3>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}