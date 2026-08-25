import { CountUp } from "@/components/CountUp";
import { CtaButton } from "@/components/CtaButton";
import { FaqList } from "@/components/FaqList";
import { GoogleRating } from "@/components/GoogleRating";
import { TrustBanner, ViewAll } from "@/components/TrustBanner";
import { VideoButton } from "@/components/VideoButton";
import { caseStudies, posts, services } from "@/lib/data";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export function HomePageV3() {
  return (
    <main>
      <section className="hero-v3">
        <div className="container">
          <div className="hero-badge"><span /> 4.9/5 Rating Through Supportive Coaching</div>
          <h1>Professional Coaching to Help You Feel Healthier</h1>
          <p className="lead" style={{ color: "#fff", maxWidth: 640, marginBottom: 28 }}>
            Our holistic health coaching approach focuses on building healthy routines that fit your lifestyle. From
            better nutrition & exercise habits to stress management.
          </p>
          <div className="hero-actions">
            <CtaButton href="/contact-us" light>Watch Our Story</CtaButton>
            <span className="watch"><VideoButton /> Partnering with Brands for a Healthier Future</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">About Our Coaching</div>
            <h2 className="section-title">Supporting your Journey to better health</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Our holistic health coaching approach focuses on building healthy routines that fit your lifestyle.
            </p>
            <div className="stats">
              <div className="stat">
                <b><CountUp to={15} suffix="+" /></b>
                <span>Experience in Wellness & Lifestyle</span>
              </div>
            </div>
            <GoogleRating />
          </div>
          <div className="about-photo">
            <img src="/images/about-us-image.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="eyebrow">Our Services</div>
          <h2 className="section-title">Expert health guidance to help</h2>
          <div className="service-grid">
            {services.slice(0, 3).map((item) => (
              <article className="card" key={item.slug}>
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                  <div className="tag"><span /> {item.tag}</div>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <ViewAll href="/services" label="View Our All Services" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">How We Works</div>
          <h2 className="section-title">Helping you transform lifestyle</h2>
          <div className="steps">
            {[
              ["Step 01", "Health Assessment", "We begin by understanding your current life, health goal & challenge."],
              ["Step 02", "Personalized Wellness Plans", "We develop a customized plan that includes nutrition guidance."],
              ["Step 03", "Ongoing Coaching & Support", "We provide continue coaching & dedicated support to help you stay."],
            ].map(([step, title, text]) => (
              <article className="step" key={step}>
                <span className="eyebrow">{step}</span>
                <h3>{title}</h3>
                <p className="muted" style={{ marginTop: 10 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="eyebrow">Our Success Stories</div>
          <h2 className="section-title">See how our coaching helps</h2>
          <div className="case-grid">
            {caseStudies.map((item) => (
              <article className="case-card" key={item.slug}>
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <Link className="learn" href={`/casestudy/${item.slug}`}>Read More <ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Latest Blogs</div>
          <h2 className="section-title">Wellness tips & health insights</h2>
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="card blog-card" key={post.slug}>
                <img src={post.image} alt={post.title} />
                <div className="card-body">
                  <h3>{post.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-visual">
            <img src="/images/faq-bg-image.jpg" alt="" />
          </div>
          <div>
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2 className="section-title">Find answers to questions</h2>
            <FaqList />
          </div>
        </div>
      </section>
      <TrustBanner href="/testimonials" linkLabel="View All Testimonials" />
    </main>
  );
}
