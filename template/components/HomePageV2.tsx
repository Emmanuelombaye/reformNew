import { CheckIcon } from "@/components/CheckIcon";
import { CtaButton } from "@/components/CtaButton";
import { FaqList } from "@/components/FaqList";
import { GoogleRating } from "@/components/GoogleRating";
import { ArrowIcon } from "@/components/Icons";
import { TrustBanner, ViewAll } from "@/components/TrustBanner";
import { VideoButton } from "@/components/VideoButton";
import { pricing, services, team, testimonials } from "@/lib/data";
import Link from "next/link";

export function HomePageV2() {
  return (
    <main>
      <section className="hero-v2">
        <div className="container">
          <div className="eyebrow">Live Healthy Feel Happy</div>
          <h1>Unlock your full potential with better health</h1>
          <p className="lead" style={{ margin: "0 auto 28px" }}>
            Achieve your health goals with personalized coaching, expert guidance, and sustainable lifestyle changes
            designed to help you feel stronger.
          </p>
          <CtaButton href="/contact-us">Book Your Class</CtaButton>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-photo">
            <img src="/images/about-us-image.jpg" alt="About coaching" />
          </div>
          <div>
            <div className="eyebrow">About Our Coaching</div>
            <h2 className="section-title">Your partner in achieving lifelong health goals</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              We are dedicated to helping individuals achieve better health through personalized coaching, balanced
              nutrition, and sustainable lifestyle changes.
            </p>
            <ul className="checks">
              <li><CheckIcon /> Personalized Health Coaching</li>
              <li><CheckIcon /> Holistic Wellness Approach</li>
              <li><CheckIcon /> Certified Expert Guidance</li>
              <li><CheckIcon /> Sustainable Lifestyle Changes</li>
            </ul>
            <GoogleRating />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="eyebrow">Our Services</div>
          <h2 className="section-title">Tailored health programs to improve your life</h2>
          <div className="service-grid">
            {services.map((item) => (
              <article className="card" key={item.slug}>
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p className="muted">{item.excerpt}</p>
                  <Link className="learn" href={`/services/${item.slug}`}>Learn More <ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
          <ViewAll href="/services" label="View All Services" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Our Pricing Plan</div>
          <h2 className="section-title">Flexible pricing plans designed for your health</h2>
          <div className="price-grid" style={{ marginTop: 36 }}>
            {pricing.map((plan) => (
              <article className={plan.featured ? "price-card featured" : "price-card"} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="price"><b>₹ {plan.price}</b>{plan.period}</p>
                <ul className="checks">
                  {plan.items.map((item) => (
                    <li key={item}><CheckIcon /> {item}</li>
                  ))}
                </ul>
                <CtaButton href="/contact-us" light={!!plan.featured}>Choose Plan</CtaButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="eyebrow">Our Team</div>
          <h2 className="section-title">Our team committed to your health success</h2>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.slug}>
                <img src={member.image} alt={member.name} />
                <div className="team-meta">
                  <div>
                    <h3>{member.name}</h3>
                    <p className="muted">{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container video-grid">
          <div>
            <div className="eyebrow">Watch Our Video</div>
            <h2 className="section-title">Our journey towards better health and wellness</h2>
            <ul className="checks">
              <li><CheckIcon /> Driven By Passion For Wellness</li>
              <li><CheckIcon /> Committed To Your Health Journey</li>
              <li><CheckIcon /> Built On Trust And Care</li>
            </ul>
          </div>
          <div className="video-box">
            <h3>Watch our story</h3>
            <VideoButton className="play-lg" />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="eyebrow">Our Testimonial</div>
          <h2 className="section-title">Client success stories</h2>
          <div className="testi-wrap" style={{ marginTop: 36 }}>
            <div className="testi-track">
              {[...testimonials, ...testimonials].map((item, i) => (
                <article className="testi-card" key={`${item.name}-${i}`} style={{ backgroundImage: `url(${item.image})` }}>
                  <p>“I had been struggling with my health for years. Joining this program was the best decision I made.”</p>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <div>
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2 className="section-title">Find answers to questions</h2>
            <FaqList />
          </div>
          <div className="faq-visual">
            <img src="/images/faq-bg-image.jpg" alt="" />
          </div>
        </div>
      </section>
      <TrustBanner />
    </main>
  );
}
