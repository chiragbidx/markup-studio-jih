// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types unchanged...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "CRM",
    badgeOuter: "ClientNest is here",
    titleBefore: "Manage Your",
    titleHighlight: "Clients, Deals, and Growth",
    titleAfter: "",
    subtitle: "ClientNest is the internal CRM platform that brings your contacts, companies, and sales pipeline together. Simplify your workflow and empower your team.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ClientNest dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted Teams Use ClientNest",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why ClientNest",
    heading: "The CRM your team will love",
    description: "Built for teams needing client management clarity, smooth workflows, and a platform that adapts as you grow.",
    items: [
      {
        icon: "Blocks",
        title: "Single Source of Truth",
        description: "Centralize contacts, company info, and deals for better collaboration.",
      },
      {
        icon: "LineChart",
        title: "Track Growth Effortlessly",
        description: "See your pipeline, visualize progress, and focus on high-impact actions.",
      },
      {
        icon: "Wallet",
        title: "Boost Team Productivity",
        description: "Streamline tasks and reduce time spent toggling between disconnected tools.",
      },
      {
        icon: "Sparkle",
        title: "Easy to Onboard",
        description: "Intuitive design helps your team get up to speed without training headaches.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything You Need for Client Management",
    subtitle: "ClientNest combines friendly UI with production-grade CRM features, so you spend less time on busywork and more time growing customer relationships.",
    items: [
      { icon: "Users", title: "Unified Contacts", description: "Store and organize all your client information in one secure place." },
      { icon: "Building", title: "Company Records", description: "Link contacts to companies and view all related activity at a glance." },
      { icon: "Workflow", title: "Sales Pipeline", description: "Track deals from lead to close and visualize your team’s progress." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "What's Included",
    heading: "Get set up in minutes",
    subtitle: "Everything you need to manage customers and deals — no special training required.",
    items: [
      { title: "Contact & Company Management", description: "Organize, search, and associate contacts and accounts.", pro: false },
      { title: "Pipeline Tracking", description: "Visualize sales, from new leads to closed deals.", pro: false },
      { title: "Team Collaboration", description: "Work together to serve clients and close important opportunities.", pro: false },
      { title: "Ownership & Permissions", description: "Control who can view and edit critical data.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Success Stories",
    heading: "Customer Success Stories",
    reviews: [
      { image: "/demo-img.jpg", name: "Priya Mehta", role: "Sales Manager, KineticBiz", comment: "ClientNest made onboarding customers a breeze. Our sales cycle is clearer and collaboration is up!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Tom Lee", role: "Founder, MarketBright", comment: "Centralizing client data and deals finally gave our team the visibility we need.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Elena Rodriguez", role: "Account Lead, CloudPanel", comment: "All-in-one CRM that was up and running for us in no time. The pipeline feature is a game-changer.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet ClientNest’s Builders",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Leo",
        lastName: "Miranda",
        positions: ["Lead Engineer", "Starter Architecture"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      // ...rest unchanged for brevity
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "David",
        lastName: "Diaz",
        positions: ["Platform Engineer", "AI Integrations"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team1.jpg",
        firstName: "Sarah",
        lastName: "Robinson",
        positions: ["Cloud Engineer", "Kubernetes"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Michael",
        lastName: "Holland",
        positions: ["DevOps Engineer", "CI/CD"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Zoe",
        lastName: "Garcia",
        positions: ["Frontend Engineer", "Design Systems"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team1.jpg",
        firstName: "Evan",
        lastName: "James",
        positions: ["Backend Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Pam",
        lastName: "Taylor",
        positions: ["Fullstack Engineer", "Product UX"],
        socialNetworks: [
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing, upgrade any time",
    subtitle: "Start with the free plan and add features as your team grows.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Perfect for early teams who want to try ClientNest.",
        buttonText: "Try for free",
        benefits: ["Unlimited contacts", "2 teammates", "Pipeline basics", "Email support", "Easy upgrade"],
      },
      {
        title: "Growth",
        popular: false,
        price: 39,
        description: "Tailored for growing companies needing more control.",
        buttonText: "Start trial",
        benefits: ["All Free features", "Unlimited teammates", "Company linking", "Activity timeline", "Priority support"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Custom rollouts and support for mature organizations.",
        buttonText: "Contact sales",
        benefits: ["All Growth features", "SSO/SAML", "Audit logs", "Custom onboarding", "Dedicated manager"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the ClientNest team",
    description: "Need help with implementation, onboarding, or want a demo? Our team is ready to assist.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Visit us", value: ["Monday - Friday", "9AM - 6PM PT"] },
    },
    formSubjects: ["CRM Demo", "Integration Question", "Feature Request", "Pricing Inquiry"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common ClientNest Questions",
    items: [
      { question: "How is ClientNest different?", answer: "ClientNest unifies contacts, accounts, and sales pipelines into an easy-to-use dashboard. Built to help teams grow faster together." },
      { question: "Is there a free plan?", answer: "Yes, get started for free and upgrade when ready. ClientNest fits teams of any size." },
      { question: "Can I customize fields and views?", answer: "We are working to offer customizable fields and pipeline stages soon." },
      { question: "Is my data secure?", answer: "Yes, your information is safe with ClientNest. Backed by best-in-class security policies." },
      { question: "Can I invite my team?", answer: "Absolutely. ClientNest enables easy team onboarding and permissions management." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "ClientNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "#" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "Discord", href: "https://discord.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 ClientNest. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "ClientNest",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "ClientNest preview" },
    features: [
      { title: "Unified Contacts", description: "All your customer info in one place." },
      { title: "Companies & Deals", description: "Associate people and accounts, track deal flows." },
      { title: "CRM Dashboard", description: "See real pipeline progress and recent activity." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}