import Link from "next/link";
import { CheckIcon, PhoneIcon } from "@/components/CheckIcon";
import { CircleBadge } from "@/components/CircleBadge";
import { CountUp } from "@/components/CountUp";
import { CtaButton } from "@/components/CtaButton";
import { FaqList } from "@/components/FaqList";
import { GoogleRating } from "@/components/GoogleRating";
import { ArrowIcon } from "@/components/Icons";
import { SocialIcons } from "@/components/SocialIcons";
import { Reveal } from "@/components/Reveal";
import { TrustBanner, ViewAll } from "@/components/TrustBanner";
import { VideoButton } from "@/components/VideoButton";
import { caseStudies, features, posts, quote, services, team, testimonials } from "@/lib/data";

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <CircleBadge className="hero-ring" text="HEALTHIO * BETTER HEALTH * HEALTHIO * " />
        <Reveal>
        <div className="container">
          <div className="hero-badge">
            <span />
            Feel Stronger, Live Better, Be Healthier
          </div>
          <h1>Start your journey to better health today!</h1>
          <div className="hero-actions">
            <CtaButton href="/contact-us">Start Your Journey</CtaButton>
            <span className="watch">
              <VideoButton />
              Watch Our Story
            </span>
          </div>
        </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
        <div className="container about-grid">
          <div className="about-photo">
            <img src="/images/about-us-image.jpg" alt="Dr. Emily Carter" />
            <div className="founder-card">
              <p>Transform your habits, transform your life forever</p>
              <SocialIcons />
              <h3>Dr. Emily Carter - Founder</h3>
            </div>
          </div>
          <div>
            <div className="eyebrow">About Our Coaching</div>
            <h2 className="section-title">Empowering your journey to health and wellness</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Empowering your journey to health & wellness means providing guidance, practical tools, and ongoing
              support to help you build sustainable habits.
            </p>
            <div className="stats">
              <div className="stat">
                <b>
                  <CountUp to={10} suffix="+" />
                </b>
                <span>Year of Experience</span>
              </div>
              <div className="stat">
                <b>
                  <CountUp to={5} suffix="k+" />
                </b>
                <span>Happy Clients</span>
              </div>
              <div className="stat">
                <b>
                  <CountUp to={1} suffix="k+" />
                </b>
                <span>Personalized Plans</span>
              </div>
            </div>
            <div className="rating-row">
              <CtaButton href="/about-us">Learn More About</CtaButton>
              <GoogleRating />
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      <section className="section section-soft">
        <Reveal>
        <div className="container">
          <div className="eyebrow">Our Services</div>
          <h2 className="section-title">Personalized health coaching services for better living</h2>
          <div className="service-grid">
            {services.slice(0, 3).map((item) => (
              <article className="card" key={item.slug}>
                <div className="img-wrap">
                  <img src={item.image} alt={item.title} />
                  <Link href={`/services/${item.slug}`} className="corner" aria-label={item.title}>
                    <ArrowIcon />
                  </Link>
                </div>
                <div className="card-body">
                  <div className="tag">
                    <span /> {item.tag}
                  </div>
                  <h3>{item.title}</h3>
                  <Link className="learn" href={`/services/${item.slug}`}>
                    Learn More <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ViewAll href="/services" label="View All Services" />
        </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
        <div className="container why-grid">
          <div>
            <div className="eyebrow">Why Choose Us</div>
            <h2 className="section-title">Discover healthier you with guided coaching</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Discover a healthier you with guided coaching that’s tailored to your unique goals, lifestyle, and
              challenges. We provide expert support, practical strategies, and ongoing motivation to help you build
              sustainable habits, improve your well-being, and achieve lasting transformation in both body and mind.
            </p>
            <ul className="checks">
              <li>
                <CheckIcon /> Certified & Experienced Coaches
              </li>
              <li>
                <CheckIcon /> Proven Client Success Stories
              </li>
            </ul>
            <div className="emergency">
              <span className="phone-ico">
                <PhoneIcon />
              </span>
              <div>
                <strong>Call for Any Emergency Service</strong>
                <p>+(1) 123 - 456 - 789</p>
              </div>
            </div>
          </div>
          <div className="why-photos">
            <img className="one" src="/images/why-choose-image-1.jpg" alt="Coaching session" />
            <img className="two" src="/images/why-choose-image-2.jpg" alt="Healthy lifestyle" />
            <CircleBadge className="why-circle" />
          </div>
        </div>
        </Reveal>
      </section>

      <section className="section section-dark">
        <img className="dots" src="/images/dark-section-dot-image-1.png" alt="" style={{ left: 0, top: 40 }} />
        <img className="dots" src="/images/dark-section-dot-image-2.png" alt="" style={{ right: 0, bottom: 0 }} />
        <Reveal>
        <div className="container core-grid">
          <div className="core-visual">
            <img src="/images/our-core-features-image.jpg" alt="Core features" />
            <div className="review-float">
              <div className="avatars">
                <img src="/images/author-1.jpg" alt="" />
                <img src="/images/author-2.jpg" alt="" />
                <img src="/images/author-3.jpg" alt="" />
              </div>
              <p>
                <strong>
                  <CountUp to={5} suffix="k+" />
                </strong>{" "}
                · 4.9/5
              </p>
            </div>
          </div>
          <div>
            <div className="eyebrow">Core Feature</div>
            <h2 className="section-title">Core features for our health journey</h2>
            <p className="lead" style={{ marginTop: 16, color: "#c9d5d3" }}>
              Through personalized strategies, expert advice, and consistent support, we help you build healthier
              habits, stay motivated, and achieve long-term results.
            </p>
            <div className="feature-list">
              {features.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.text}</p>
                </div>
              ))}
            </div>
            <CtaButton href="/contact-us" light>
              Start Coaching Today
            </CtaButton>
          </div>
        </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
        <div className="container">
          <div className="eyebrow">Our Success Stories</div>
          <h2 className="section-title">See how our coaching helps</h2>
          <p className="lead">
            These success stories showcase individuals who took the first step toward better health and achieved lasting
            results through consistent support
          </p>
          <div className="case-grid">
            {caseStudies.slice(0, 3).map((item) => (
              <article className="case-card" key={item.slug}>
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                  <div className="chips">
                    {item.categories.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <Link className="learn" href={`/casestudy/${item.slug}`}>
                    Read More <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ViewAll href="/casestudy" label="View All Case Study" />
        </div>
        </Reveal>
      </section>

      <TrustBanner href="/casestudy" linkLabel="View All Case Study" />

      <section className="section section-soft">
        <div className="container video-grid">
          <div>
            <div className="eyebrow">Watch Our Video</div>
            <h2 className="section-title">Watch our video and start your wellness journey</h2>
            <ul className="checks">
              <li>
                <CheckIcon /> Build Your Unique Path to Wellness
              </li>
              <li>
                <CheckIcon /> Ongoing Motivation & Accountability
              </li>
            </ul>
            <CtaButton href="/contact-us">Start Coaching Today</CtaButton>
          </div>
          <div className="video-box">
            <h3>Transform your mindset, commit daily, and achieve lasting wellness success</h3>
            <VideoButton className="video-play" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Our Team Member</div>
          <h2 className="section-title">Our dedicated team members</h2>
          <p className="lead">
            These success stories showcase individuals who took the first step toward better health and achieved lasting
            results through consistent support
          </p>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.slug}>
                <img src={member.image} alt={member.name} />
                <div className="team-meta">
                  <div>
                    <h3>{member.name}</h3>
                    <p className="muted">{member.role}</p>
                  </div>
                  <Link href={`/our-team/${member.slug}`} className="team-arrow">
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ViewAll href="/our-team" label="View All Team Members" />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="testi-head">
            <div>
              <div className="eyebrow">Testimonials</div>
              <h2 className="section-title">Client success case-studies & reviews</h2>
            </div>
            <GoogleRating />
          </div>
          <div className="testi-wrap">
            <div className="testi-track">
              {[...testimonials, ...testimonials].map((item, i) => (
                <article className="testi-card" key={`${item.name}-${i}`} style={{ backgroundImage: `url(${item.image})` }}>
                  <p>“{quote}”</p>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Our Module</div>
          <h2 className="section-title">Explore our health modules</h2>
          <p className="lead">
            Each module focuses on key areas such as nutrition, fitness, mental well-being, and habit building,
            providing practical strategies and expert support.
          </p>
          <div className="module-grid">
            <article className="module dark">
              <h3>Our 4-Week Calm Mind and Strong Body Program</h3>
              <div className="avatars" style={{ marginTop: 24 }}>
                <img src="/images/author-1.jpg" alt="" />
                <img src="/images/author-2.jpg" alt="" />
                <img src="/images/author-3.jpg" alt="" />
                <img src="/images/author-4.jpg" alt="" />
              </div>
              <p style={{ marginTop: 16 }}>Members Improved Their Daily Health Habits</p>
            </article>
            <article className="module">
              <p className="muted">Monday – 7:00 AM (Live)</p>
              <h3 style={{ margin: "12px 0" }}>Weight Management</h3>
              <p className="muted">
                Achieve and maintain a healthy weight with sustainable methods that focus on long term success rather
                than quick fix.
              </p>
            </article>
            <article className="module">
              <p className="muted">Monday – 7:00 AM (Live)</p>
              <h3 style={{ margin: "12px 0" }}>Sleep & Recovery</h3>
              <p className="muted">
                Achieve and maintain a healthy weight with sustainable methods that focus on long term success rather
                than quick fix.
              </p>
            </article>
          </div>
          <ViewAll href="/contact-us" label="Contact Us" />
        </div>
      </section>

      <TrustBanner />

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-visual">
            <img src="/images/faq-bg-image.jpg" alt="Frequently asked questions" />
          </div>
          <div>
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2 className="section-title">Find answers to questions</h2>
            <p className="lead" style={{ margin: "16px 0 8px" }}>
              Our FAQ section provides clear, helpful information to guide you through our programs, & approach,
              ensuring you feel confident and informed every step of the way.
            </p>
            <FaqList />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Latest Blogs</div>
          <h2 className="section-title">Wellness tips & health insights</h2>
          <p className="lead">
            Explore our latest articles covering nutrition advice, fitness guidance, stress management, and healthy
            living tips.
          </p>
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="card blog-card" key={post.slug}>
                <img src={post.image} alt={post.title} />
                <div className="card-body">
                  <h3>{post.title}</h3>
                  <Link className="learn" href={`/blog/${post.slug}`}>
                    Read More <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
