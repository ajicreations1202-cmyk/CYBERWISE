export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  syllabus: string[];
  skillsGained: string[];
  trendingBadge?: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
  source: string;
}

export interface Audience {
  title: string;
  description: string;
  iconName: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export const INST_INFO = {
  name: "CyberWise Skillversity",
  tagline: "Learn, Create, Grow, and Lead in the Digital Age",
  poweredBy: "CyberWise Info Solutions",
  address: "1st Floor, Near Railway Station Rd, Angadippuram, Perinthalmanna, Malappuram, Kerala, Pin: 679322",
  phone: "+91 80862 34443", // Let's use a realistic Indian phone formatted beautifully
  phoneRaw: "+918086234443",
  email: "info@cyberwiseinfosolutions.com",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6669919746414!2d76.2232145!3d10.988583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ccd34510b65f%3A0xe54b9d031c26b97b!2sCyberWise%20Info%20Solutions!5e0!3m2!1sen!2sin!4v1718420000000!5m2!1sen!2sin",
};

export const STATISTICS_DATA: Stat[] = [
  { value: 1200, suffix: "+", label: "Students Trained", description: "Empowered with digital job-ready skills" },
  { value: 8, suffix: "", label: "Premium Courses", description: "Specially designed industry curricula" },
  { value: 100, suffix: "%", label: "Placement Support", description: "Dedicated placement wing and mock interviews" },
  { value: 45, suffix: "+", label: "Industry Projects", description: "Real-world portfolio development campaigns" },
];

export const COURSES_DATA: Course[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    duration: "4 Weeks",
    level: "All Levels",
    description: "Master keyword research, on-page SEO, off-page backlinks architecture, technical site auditing, and search ranking algorithms to generate organic web traffic.",
    syllabus: [
      "Keyword Research & Search Intent Mapping",
      "On-Page Optimization (Meta, Headings, Content Relevance)",
      "Technical SEO (Schema, Sitemap, Core Web Vitals)",
      "Off-Page Link Building & Domain Authority Strategies",
      "SEO Auditing Tools (Ahrefs, SEMrush, Screaming Frog)"
    ],
    skillsGained: ["Keyword Strategy", "Google Search Console", "Link Building", "Technical Audits"],
    trendingBadge: "High Demand"
  },
  {
    id: "smm",
    title: "Social Media Marketing (SMM)",
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    description: "Learn brand positioning and run successful campaigns across Meta (Facebook & Instagram), LinkedIn, Twitter, and YouTube using advanced ad tools and content models.",
    syllabus: [
      "Social Media Strategy & Page Architecture",
      "Organic Growth & Community Building",
      "Meta Business Manager & Paid Ad Setup",
      "Audience Targeting & Retargeting funnels",
      "LinkedIn, Twitter, and YouTube Business Channels"
    ],
    skillsGained: ["Meta Ads", "Campaign Strategy", "Audience Retargeting", "Community Building"],
    trendingBadge: "Popular"
  },
  {
    id: "content",
    title: "Content Creation & Marketing",
    duration: "4 Weeks",
    level: "All Levels",
    description: "Master high-impact copywriting, content marketing strategy, viral storytelling, and blogging techniques that capture audience attention and convert them to loyal buyers.",
    syllabus: [
      "Principles of High-Converting Copywriting",
      "Content Matrix & Distribution Strategy",
      "Blogging, SEO Writing & Long-form Content",
      "Video Scripting for Hooks & Reels",
      "Graphic Design Basics with Canva for Social Posting"
    ],
    skillsGained: ["Copywriting", "Storytelling", "Content Layout", "UX Copy"],
  },
  {
    id: "ppc",
    title: "Pay-Per-Click (PPC) Advertising",
    duration: "6 Weeks",
    level: "Intermediate",
    description: "Build, configure, and optimize performance campaigns inside Google Ads and Bing Ads. Learn search ads, display networks, shopping campaigns, and key ROI tracking metrics.",
    syllabus: [
      "Google Ads Network & Auction Bidding Models",
      "Search Ads, Display, & Performance Max Strategies",
      "Conversion Tracking Setup & Tag Manager",
      "Ad Copywriting & Dynamic Keyword Insertion",
      "A/B Testing, Budget Scaling & Bid Adjustments"
    ],
    skillsGained: ["Google Ads", "Conversion Setup", "ROI Analysis", "A/B Testing"],
    trendingBadge: "High ROI"
  },
  {
    id: "email",
    title: "Email Marketing & Automation",
    duration: "3 Weeks",
    level: "Intermediate",
    description: "Design automated customer Journeys, email campaigns, newsletter strategies, lead magnets, and customer segments that maximize retention and lifecycle value.",
    syllabus: [
      "Lead Magnet Design & Landing Page Builders",
      "Contact Segmentations & Personalization Rules",
      "Automation Triggers & Nurturing Sequences",
      "Email Copywriting & Spam Filter avoidance",
      "A/B Subject Line Testing & Open Rate Analysis"
    ],
    skillsGained: ["Mailchimp / ActiveCampaign", "Automation Rules", "Lead Segmentation", "Retention Funnels"],
  },
  {
    id: "analytics",
    title: "Web Analytics (GA4)",
    duration: "4 Weeks",
    level: "Intermediate to Advanced",
    description: "Analyze user behaviors, set up interactive dashboards, configure custom events, and translate raw web traffic data into intelligence using Google Analytics 4.",
    syllabus: [
      "Understanding Google Analytics 4 (GA4) Interface",
      "Custom Event Tracking with Google Tag Manager (GTM)",
      "Funnel Exploration & Conversion Attribution Models",
      "Building Custom Looker Studio Dashboards",
      "Data-Driven Business Optimization Tactics"
    ],
    skillsGained: ["Google Analytics 4", "GTM Setup", "Data Reporting", "Looker Studio"],
  },
  {
    id: "web-dev",
    title: "Website Development & CMS",
    duration: "6 Weeks",
    level: "Beginner Friendly",
    description: "Build clean, professional, fully responsive, and SEO-optimized business websites using WordPress, Elementor Pro, and modern landing page components.",
    syllabus: [
      "Web Hosting, Domain Management & SSL Setup",
      "WordPress Installation & System Configuration",
      "Page Editing with Elementor Pro Page Builder",
      "E-commerce setup with WooCommerce & Payment Gateways",
      "Speed Optimization, Asset Caching & Mobile UI Customization"
    ],
    skillsGained: ["WordPress CMS", "Elementor Pro", "WooCommerce", "Landing Page UX"],
  },
  {
    id: "ai-marketing",
    title: "AI-Powered Digital Marketing",
    duration: "4 Weeks",
    level: "Modern Specialization",
    description: "Harness cutting-edge generative AI models, automation workflows, copy bots, and predictive triggers to scale your marketing material production and content delivery tenfold.",
    syllabus: [
      "AI Prompt Engineering for Lead Generation & Ads",
      "Automated Content Calendars using Chat GPT & Custom GPTs",
      "AI Video Production & Voice Synthesis tools",
      "Marketing workflow automation (Zapier, Make)",
      "Branding and logo designs through specialized Midjourney/DALL-E configurations"
    ],
    skillsGained: ["Prompt Engineering", "Workflow Automation", "AI Scripting", "Synthesized Assets"],
    trendingBadge: "Futuristic"
  }
];

export const WHY_CHOOSE_US_DATA: Benefit[] = [
  {
    title: "Industry-Oriented Training",
    description: "Curriculum tailored to real demands of local and multinational companies, skipping outdated theories.",
    iconName: "Briefcase"
  },
  {
    title: "Live Projects & Practical Sessions",
    description: "Get hands-on experience running live marketing campaigns with actual advertising budgets and traffic.",
    iconName: "Flame"
  },
  {
    title: "Expert Mentorship",
    description: "Learn directly from certified digital marketing practitioners and consultants who work with global clients.",
    iconName: "UserCheck"
  },
  {
    title: "Career-Focused Programs",
    description: "Structured paths designed to prepare you directly for mock screenings, technical reviews, and immediate employment.",
    iconName: "Activity"
  },
  {
    title: "Latest AI Tools & Tech",
    description: "Learn to design, produce, and automate entire social grids with ChatGPT, Midjourney, Canva AI, and looker dashboards.",
    iconName: "Cpu"
  },
  {
    title: "Placement Assistance",
    description: "Dedicated networking channels, resume builders, and corporate recruitment tie-ups across Kerala & beyond.",
    iconName: "Trophy"
  },
  {
    title: "Freelancing Opportunities",
    description: "Specialized training on setting up Upwork, Fiverr, and local consulting contracts to start earning while you study.",
    iconName: "Globe"
  },
  {
    title: "Premium Certification Programs",
    description: "Earn globally recognized credentials from Google, HubSpot, Meta, and CyberWise Skillversity upon completion.",
    iconName: "Award"
  }
];

export const WHO_CAN_JOIN_DATA: Audience[] = [
  {
    title: "College Students",
    description: "Boost your credentials and secure freelance gigs or high-paying corporate roles right after your college semesters.",
    iconName: "GraduationCap"
  },
  {
    title: "Fresh Graduates",
    description: "Bridge the gap between generic university knowledge and highly demanded practical digital agency specializations.",
    iconName: "FileCheck"
  },
  {
    title: "Entrepreneurs",
    description: "Stop spending on expensive marketing consultants. Learn how to launch, track, and convert traffic for your start-ups.",
    iconName: "Building"
  },
  {
    title: "Business Owners",
    description: "Scale local companies in Malappuram and global franchises into heavy-revenue engines using automated ad systems.",
    iconName: "TrendingUp"
  },
  {
    title: "Freelancers",
    description: "Transition your skills into premium, high-ticket recurring retainer accounts. Earn currency scaling overseas business.",
    iconName: "Laptop"
  },
  {
    title: "Working Professionals",
    description: "Upskill to digital strategies, enhance your performance marketing skills, and secure fast-track leadership promotions.",
    iconName: "Network"
  },
  {
    title: "Career Switchers",
    description: "Pivot effortlessly from sales, administration or technical roles into the dynamic, future-proof industry of digital ads.",
    iconName: "RefreshCw"
  }
];

export const FEATURES_LIST: Feature[] = [
  {
    title: "Hands-On Training",
    description: "80% practical session breakdown where you perform exercises live in the academy's terminal labs.",
    iconName: "MousePointerClick"
  },
  {
    title: "Real-Time Projects",
    description: "Handle live accounts, manage social channels, and track Google Analytics trends in real time.",
    iconName: "Calendar"
  },
  {
    title: "Experienced Trainers",
    description: "Led by marketing directors who manage actual digital campaign budgets daily in international markets.",
    iconName: "Users"
  },
  {
    title: "Industry Certifications",
    description: "Google Ads, Meta Certified Associate, Semrush SEO, and HubSpot Inbound marketing credentials.",
    iconName: "FileSpreadsheet"
  },
  {
    title: "AI Integration First",
    description: "We weave generative AI toolsets straight into every module, making you 5x quicker than average professionals.",
    iconName: "Sparkles"
  },
  {
    title: "Career & Interview prep",
    description: "Mock panels, portfolio review, salary negotiations, and confidence accentuation mentorship sessions.",
    iconName: "CheckCircle2"
  },
  {
    title: "Continuous Alum Support",
    description: "Free access to latest updates, community chat networks, and monthly offline masterclass check-ins.",
    iconName: "Heart"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Aswanth K. P.",
    role: "SEO Strategist, Alpha Media",
    rating: 5,
    comment: "Deciding to join CyberWise Skillversity is the best career decision I've ever made. The practical SEO audits we did on real clients prepared me perfectly for my agency interview in Cochin. The course is fully hands-on and the mentorship is gold-standard.",
    source: "Alumni Batch 2025"
  },
  {
    name: "Fathima Shabnam",
    role: "Freelance Content Consultant & Social Manager",
    rating: 5,
    comment: "The social media and AI marketing modules are top-notch. They show you exactly. how to leverage ChatGPT and Canva AI to design creative grids. Within 3 months of completion, I secured 4 premium retainers as a graphic copywriter right here in Perinthalmanna!",
    source: "Freelance Entrepreneur"
  },
  {
    name: "Rahul Ramachandran",
    role: "E-Commerce Business Owner",
    rating: 5,
    comment: "I entered CyberWise to scale my local fashion brand. The Google Ads and Meta Retargeting frameworks they explained helped me cut my acquisition costs in half! I highly recommend business owners in Kerala to upskill right here.",
    source: "Business Batch"
  },
  {
    name: "Anjali Menon",
    role: "Digital Campaign Executive",
    rating: 5,
    comment: "I came from a generic commerce background. CyberWise Skillversity's placement support changed everything. They built my portfolio, mock-interviewed me, and guided me into an agency job within 15 days of finishing my course!",
    source: "Alumni Batch 2025"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Academy Lab",
    category: "Learning Space",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g2",
    title: "Practical Session",
    category: "Hands-on Focus",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g3",
    title: "Creative Discussion",
    category: "Collaborative Lab",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g4",
    title: "Expert Seminar",
    category: "Masterclass Room",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g5",
    title: "Google Ad Campaign Setup",
    category: "Live Campaign",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g6",
    title: "AI Tools Workshop",
    category: "Next-gen Marketing",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  }
];
