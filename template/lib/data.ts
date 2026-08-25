export const navLinks = [
  {
    href: "/",
    label: "Home",
    children: [
      { href: "/", label: "Home - Version 1" },
      { href: "/home-version-2", label: "Home - Version 2" },
      { href: "/home-version-3", label: "Home - Version 3" },
    ],
  },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  {
    href: "#",
    label: "Pages",
    children: [
      { href: "/about-us", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/services/personalized-health-coaching", label: "Service Details" },
      { href: "/casestudy", label: "Case Study" },
      { href: "/casestudy/achieving-fitness-goals-naturally", label: "Case Study Details" },
      { href: "/our-team", label: "Our Team" },
      { href: "/our-team/dr-emily-carter", label: "Team Details" },
      { href: "/pricing-plan", label: "Pricing Plan" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/image-gallery", label: "Image Gallery" },
      { href: "/video-gallery", label: "Video Gallery" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  { href: "/contact-us", label: "Contact Us" },
];

export const services = [
  {
    slug: "personalized-health-coaching",
    tag: "Nutrition",
    title: "Personalized Health Coaching",
    image: "/images/service-1.jpg",
    excerpt: "Get customized meal plans and nutrition guidance tailored to your body, lifestyle.",
  },
  {
    slug: "weight-management-programs",
    tag: "Wellness",
    title: "Weight Management Programs",
    image: "/images/service-2.jpg",
    excerpt: "Get customized meal plans and nutrition guidance tailored to your body, lifestyle.",
  },
  {
    slug: "strength-mobility-coaching",
    tag: "Strength",
    title: "Strength & Mobility Coaching",
    image: "/images/service-3.jpg",
    excerpt: "Get customized meal plans and nutrition guidance tailored to your body, lifestyle.",
  },
  {
    slug: "fitness-activity-guidance",
    tag: "Fitness",
    title: "Fitness & Activity Guidance",
    image: "/images/case-study-item-image-1.jpg",
    excerpt: "Get customized meal plans and nutrition guidance tailored to your body, lifestyle.",
  },
];

export const features = [
  { title: "Progress Monitoring", text: "Track your health journey with regular assessments." },
  { title: "Meditation Practices", text: "Track your health journey with regular assessments." },
  { title: "Flexible Online Sessions", text: "Track your health journey with regular assessments." },
  { title: "Ongoing Motivation", text: "Track your health journey with regular assessments." },
];

export const caseStudies = [
  {
    slug: "achieving-fitness-goals-naturally",
    title: "Achieving Fitness Goals Naturally",
    image: "/images/case-study-item-image-1.jpg",
    categories: ["Fitness & Activity", "Nutrition"],
  },
  {
    slug: "strength-improvement-story",
    title: "Strength Improvement Story",
    image: "/images/case-study-item-image-2.jpg",
    categories: ["Mindfulness"],
  },
  {
    slug: "chronic-fatigue-recovery-journey",
    title: "Chronic Fatigue Recovery Journey",
    image: "/images/case-study-item-image-3.jpg",
    categories: ["Harmony"],
  },
  {
    slug: "achieving-sustainable-weight-loss",
    title: "Achieving Sustainable Weight Loss",
    image: "/images/service-2.jpg",
    categories: ["Wellness"],
  },
  {
    slug: "improving-mental-well-being",
    title: "Improving Mental Well-Being",
    image: "/images/post-2.jpg",
    categories: ["Mindfulness"],
  },
  {
    slug: "staying-consistent-with-fitness",
    title: "Staying Consistent with Fitness",
    image: "/images/service-3.jpg",
    categories: ["Fitness"],
  },
];

export const team = [
  { slug: "dr-emily-carter", name: "Dr. Emily Carter", role: "Fitness & Nutrition Coach", image: "/images/team-1.jpg" },
  { slug: "dr-olivia-davis", name: "Dr. Olivia Davis", role: "Holistic Health Consultant", image: "/images/team-2.jpg" },
  { slug: "dr-jessica-lee", name: "Dr. Jessica Lee", role: "Certified Health Coach", image: "/images/team-3.jpg" },
];

export const testimonials = [
  { name: "James Wilson", role: "Wellness Program Manager", image: "/images/testimonial-image-1.jpg", avatar: "/images/author-1.jpg" },
  { name: "Annette Black", role: "Wellness Program Manager", image: "/images/testimonial-image-2.jpg", avatar: "/images/author-2.jpg" },
  { name: "Bessie Cooper", role: "Wellness Program Manager", image: "/images/testimonial-image-3.jpg", avatar: "/images/author-3.jpg" },
];

export const quote =
  "The personalized coaching plan completely changed my daily habits. I lost, improved my diet, and now feel more active.";

export const faqs = [
  {
    q: "Are sessions conducted online or offline?",
    a: "Anyone looking to improve their health, manage weight, reduce stress, or build better daily habits can benefit from health coaching.",
  },
  {
    q: "Who can benefit from health coaching?",
    a: "Anyone looking to improve their health, manage weight, reduce stress, or build better daily habits can benefit from health coaching.",
  },
  {
    q: "Can you help with stress and mental wellness?",
    a: "Anyone looking to improve their health, manage weight, reduce stress, or build better daily habits can benefit from health coaching.",
  },
  {
    q: "How do the health coaching sessions work?",
    a: "Anyone looking to improve their health, manage weight, reduce stress, or build better daily habits can benefit from health coaching.",
  },
];

export const posts = [
  {
    slug: "5-simple-morning-habits-to-boost-your-energy-all-day",
    title: "5 Simple Morning Habits to Boost Your Energy All Day",
    image: "/images/post-1.jpg",
  },
  {
    slug: "how-balanced-nutrition-improves-your-overall-health",
    title: "How Balanced Nutrition Improves Your Overall Health",
    image: "/images/post-2.jpg",
  },
  {
    slug: "the-importance-of-staying-active-for-a-healthy-lifestyle",
    title: "The Importance of Staying Active for a Healthy Lifestyle",
    image: "/images/post-3.jpg",
  },
];

export const pricing = [
  { name: "Basic Plan", price: "1,999", period: "/ Per Month", items: ["Monthly Coaching Session", "Customized Diet & Fitness Plan", "Fully Personalized Health Program", "Advanced Tracking & Reports"] },
  { name: "Standard Plan", price: "3,999", period: "/ Per Month", featured: true, items: ["Monthly Coaching Session", "Customized Diet & Fitness Plan", "Fully Personalized Health Program", "Advanced Tracking & Reports"] },
  { name: "Premium Plan", price: "6,999", period: "/ Per Month", items: ["Monthly Coaching Session", "Customized Diet & Fitness Plan", "Fully Personalized Health Program", "Advanced Tracking & Reports"] },
];

export const benefits = [
  { n: "01", title: "Increased Energy Levels", text: "Feel more energized throughout the day by improving your nutrition, daily habits, and overall lifestyle." },
  { n: "02", title: "Better Lifestyle Balance", text: "Feel more energized throughout the day by improving your nutrition, daily habits, and overall lifestyle." },
  { n: "03", title: "Sustainable Healthy Habits", text: "Feel more energized throughout the day by improving your nutrition, daily habits, and overall lifestyle." },
  { n: "04", title: "Improved Mental Well-Being", text: "Feel more energized throughout the day by improving your nutrition, daily habits, and overall lifestyle." },
];

export const approachCards = [
  { title: "Our Mission", text: "Our mission is to empower individual to take control of their health and well being through personalized coaching.", stat: "100%", label: "Focus Long-Term Results" },
  { title: "Our Vision", text: "Our vision is to create a world where healthy living becomes a natural and sustainable part of everyday life.", stat: "15+", label: "Years of Experience" },
  { title: "Our Values", text: "We believe in providing honest guidance, personalized support, and practical solutions that truly make a difference.", stat: "99%", label: "Client Trust & Satisfaction" },
];
