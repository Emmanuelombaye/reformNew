export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Treatments" },
  { href: "/blog", label: "Blog" },
  {
    href: "#",
    label: "Pages",
    children: [
      { href: "/about-us", label: "About Us" },
      { href: "/services", label: "Treatments" },
      { href: "/services/personalized-health-coaching", label: "Semaglutide Care" },
      { href: "/casestudy", label: "Outcomes" },
      { href: "/casestudy/achieving-fitness-goals-naturally", label: "Outcome Details" },
      { href: "/our-team", label: "Our Physicians" },
      { href: "/our-team/dr-emily-carter", label: "Physician Details" },
      { href: "/pricing-plan", label: "Pricing" },
      { href: "/testimonials", label: "Stories" },
      { href: "/image-gallery", label: "Image Gallery" },
      { href: "/video-gallery", label: "Video Gallery" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  { href: "/contact-us", label: "Get Started" },
];

/** Same routes/slugs as before — words only */
export const services = [
  {
    slug: "personalized-health-coaching",
    tag: "GLP-1",
    title: "Semaglutide Care",
    image: "/images/service-1.jpg",
    excerpt:
      "Physician-directed GLP-1 care to quiet food noise, steady hunger, and support real weight loss — with follow-through.",
  },
  {
    slug: "weight-management-programs",
    tag: "Dual agonist",
    title: "Tirzepatide Care",
    image: "/images/service-2.jpg",
    excerpt:
      "A dual-agonist protocol when you want a stronger metabolic option — still clinical, still personal, still supervised.",
  },
  {
    slug: "strength-mobility-coaching",
    tag: "Support",
    title: "Protocol Support",
    image: "/images/service-3.jpg",
    excerpt:
      "Titration help, side-effect guidance, and check-ins so you’re never guessing between doses.",
  },
  {
    slug: "fitness-activity-guidance",
    tag: "Lifestyle",
    title: "Nutrition & Habits",
    image: "/images/case-study-item-image-1.jpg",
    excerpt:
      "Simple, sustainable habits that work with your protocol — not another crash diet plan.",
  },
];

export const features = [
  { title: "Physician oversight", text: "Clinicians review eligibility, dosing, and progress — not a quiz alone." },
  { title: "Compounding clarity", text: "When appropriate, fulfilled with licensed compounding and clear instructions." },
  { title: "Telehealth that listens", text: "Check-ins for hunger, energy, side effects, and real life." },
  { title: "Accountable follow-through", text: "A plan for month one — and what comes after." },
];

export const caseStudies = [
  {
    slug: "achieving-fitness-goals-naturally",
    title: "Quiet food noise, finally",
    image: "/images/case-study-item-image-1.jpg",
    categories: ["Semaglutide Care"],
  },
  {
    slug: "strength-improvement-story",
    title: "From stalled to steady",
    image: "/images/case-study-item-image-2.jpg",
    categories: ["Tirzepatide Care"],
  },
  {
    slug: "chronic-fatigue-recovery-journey",
    title: "Energy back on the calendar",
    image: "/images/case-study-item-image-3.jpg",
    categories: ["Support"],
  },
  {
    slug: "achieving-sustainable-weight-loss",
    title: "Sustainable weight loss, clinically guided",
    image: "/images/service-2.jpg",
    categories: ["Outcomes"],
  },
  {
    slug: "improving-mental-well-being",
    title: "Less spiral, more clarity",
    image: "/images/post-2.jpg",
    categories: ["Stories"],
  },
  {
    slug: "staying-consistent-with-fitness",
    title: "Consistency without the crash diet",
    image: "/images/service-3.jpg",
    categories: ["Habits"],
  },
];

export const team = [
  { slug: "dr-emily-carter", name: "Dr. Emily Carter", role: "Medical Director, Metabolic Care", image: "/images/team-1.jpg" },
  { slug: "dr-olivia-davis", name: "Dr. Olivia Davis", role: "Physician, GLP-1 Protocols", image: "/images/team-2.jpg" },
  { slug: "dr-jessica-lee", name: "Dr. Jessica Lee", role: "Physician, Telehealth & Titration", image: "/images/team-3.jpg" },
];

export const testimonials = [
  { name: "Maya R.", role: "Semaglutide Care patient", image: "/images/testimonial-image-1.jpg", avatar: "/images/author-1.jpg" },
  { name: "Annette Black", role: "Tirzepatide Care patient", image: "/images/testimonial-image-2.jpg", avatar: "/images/author-2.jpg" },
  { name: "Jordan Lee", role: "novimid patient", image: "/images/testimonial-image-3.jpg", avatar: "/images/author-3.jpg" },
];

export const quote =
  "I finally felt like someone was managing the protocol with me — not selling me a miracle. The food noise got quieter. The plan got clearer.";

export const faqs = [
  {
    q: "Is this just an online quiz and a prescription?",
    a: "No. novimid pairs telehealth evaluation with physician oversight. Eligibility, dosing, and follow-up are clinical decisions.",
  },
  {
    q: "What’s the difference between Semaglutide Care and Tirzepatide Care?",
    a: "Semaglutide Care is a GLP-1 pathway. Tirzepatide Care is a dual-agonist pathway your clinician may recommend when a stronger metabolic option fits.",
  },
  {
    q: "Will I have support if side effects show up?",
    a: "Yes. Titration, side-effect guidance, and check-ins are part of the protocol — so you’re not left guessing.",
  },
  {
    q: "How do the telehealth visits work?",
    a: "Complete intake, review history and goals with a clinician, and get a clear plan if treatment is appropriate. Follow-ups keep progress on track.",
  },
];

export const posts = [
  {
    slug: "5-simple-morning-habits-to-boost-your-energy-all-day",
    title: "What “food noise” actually means on a GLP-1 protocol",
    image: "/images/post-1.jpg",
  },
  {
    slug: "how-balanced-nutrition-improves-your-overall-health",
    title: "Semaglutide vs tirzepatide: how clinicians think about the choice",
    image: "/images/post-2.jpg",
  },
  {
    slug: "the-importance-of-staying-active-for-a-healthy-lifestyle",
    title: "How to stay consistent without turning weight loss into a crash diet",
    image: "/images/post-3.jpg",
  },
];

export const pricing = [
  { name: "Consult", price: "0", period: "/ Intake", items: ["Clinical eligibility review", "Protocol recommendation", "Transparent next steps", "No pressure checkout"] },
  { name: "Semaglutide Care", price: "—", period: "/ Protocol", featured: true, items: ["Physician-directed GLP-1 plan", "Titration guidance", "Telehealth follow-ups", "Side-effect support"] },
  { name: "Tirzepatide Care", price: "—", period: "/ Protocol", items: ["Dual-agonist pathway", "Physician oversight", "Metabolic follow-through", "Personalized adjustments"] },
];

export const benefits = [
  { n: "01", title: "Less food noise", text: "Help quiet constant hunger cues so decisions feel lighter — not louder." },
  { n: "02", title: "Clinical clarity", text: "Know what’s prescribed, why, and what follow-up looks like." },
  { n: "03", title: "Real accountability", text: "Check-ins that track progress and tolerance — not just shipping." },
  { n: "04", title: "Sustainable pacing", text: "Titration built for staying power, not a two-week sprint." },
];

export const approachCards = [
  { title: "Our Mission", text: "Make physician-directed weight-loss care feel clear, calm, and human — without the wellness hype.", stat: "2", label: "Core protocols" },
  { title: "Our Vision", text: "Metabolic care that’s precise, accessible via telehealth, and accountable from day one.", stat: "100%", label: "Physician-led" },
  { title: "Our Values", text: "Clinical honesty, compounding precision when needed, and language patients understand.", stat: "1:1", label: "Care pathway" },
];
