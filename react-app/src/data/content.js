export const GYM_DATA = {
  name: "The Fitness World",
  branch: "Lohar Pul, New Town, Kolkata",
  address: "CN129, Thakdari Rd, near LOHA PUL, Action Area I, Dhalipara, Newtown, Kolkata 700102",
  phonePrimary: "097759 95300",
  phoneSecondary: "086536 80217",
  whatsappNumber: "919775995300",
  phoneHref: "tel:09775995300",
  rating: "4.9",
  reviewsCount: "99+",
  hours: "Open 24 Hours · 365 Days a Year",

  stats: [
    { value: "4.9★", label: "Google Rating" },
    { value: "24/7", label: "365 Days Access" },
    { value: "99+", label: "Verified Reviews" },
    { value: "100%", label: "Free Diet Charts" }
  ],

  services: [
    {
      id: "strength",
      title: "Weight Training",
      category: "strength",
      badge: "Heavy Iron",
      desc: "Biomechanical strength equipment, Olympic power racks, free weights, cable crossovers, and dumbbell sets up to 50kg for pure hypertrophy.",
      perks: ["Imported biomechanical plates & bars", "Form assistance by floor trainers", "Progressive overload tracking"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "crossfit",
      title: "CrossFit & Functional HIIT",
      category: "crossfit",
      badge: "Metabolic Burn",
      desc: "High-intensity metabolic conditioning using battle ropes, plyometric boxes, kettlebell circuits, and sled tracks to incinerate calories.",
      perks: ["Full-body functional movement drills", "Heart rate zone stamina building", "Daily changing workout routines"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "kickboxing",
      title: "Kickboxing & Combat",
      category: "combat",
      badge: "Combat Conditioning",
      desc: "Cardio combat conditioning, punch-kick pad routines, footwork agility, and explosive core power. Excellent for self-defense and stress relief.",
      perks: ["Heavy bag & focus mitt combinations", "Agility, reflex & core strengthening", "Beginner-friendly coach guidance"],
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "zumba",
      title: "Zumba & Aerobics",
      category: "studio",
      badge: "Group Studio",
      desc: "Rhythmic high-energy dance workouts led by certified trainers. Burns 600+ calories per session while boosting coordination and mood.",
      perks: ["Upbeat music & group camaraderie", "Cardiovascular endurance & fat burn", "Weekend special high-energy batches"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "spinning",
      title: "Cycling & Spinning",
      category: "studio",
      badge: "Cardio Zone",
      desc: "Stationary RPM bikes and spin tracks engineered for high-cadence endurance, interval sprints, and lower-body power development.",
      perks: ["Custom resistance & cadence control", "Low-impact on joints, high caloric burn", "Heart rate telemetry monitors"],
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "pt",
      title: "Personal Coaching & Nutrition",
      category: "coaching",
      badge: "1-on-1 Elite",
      desc: "Dedicated 1-on-1 certified personal coaching tailored to your body composition. Includes 100% customized macro diet charts and weekly check-ins.",
      perks: ["Personalized calorie & protein blueprint", "Bi-weekly body fat % measurements", "Targeted body transformations"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
    }
  ],

  gallery: [
    {
      title: "Heavy Free Weights Zone",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cardio & Spin Deck",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Power Racks & Platforms",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Functional Turf & Sleds",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
    }
  ],

  trainers: [
    {
      name: "Vikram Sen",
      role: "Head Strength & Conditioning",
      certs: "ACE Certified · 8+ Years Coaching · 250+ Transformations",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Ananya Roy",
      role: "CrossFit & Zumba Master Trainer",
      certs: "Certified Zumba Specialist · HIIT Conditioning Expert",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sourav Das",
      role: "Chief Nutritionist & Hypertrophy Coach",
      certs: "K11 Certified · Sports Dietetics · Macro Formulation",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    }
  ],

  memberships: {
    monthly: {
      standard: { price: 1500, period: "per month", savings: "" },
      pro: { price: 2500, period: "per month", savings: "Most Popular" },
      vip: { price: 4500, period: "per month", savings: "1-on-1 PT Included" }
    },
    quarterly: {
      standard: { price: 3800, period: "for 3 months", savings: "Save ₹700" },
      pro: { price: 6200, period: "for 3 months", savings: "Save ₹1,300" },
      vip: { price: 11500, period: "for 3 months", savings: "Save ₹2,000" }
    },
    halfYearly: {
      standard: { price: 6800, period: "for 6 months", savings: "Save ₹2,200" },
      pro: { price: 10800, period: "for 6 months", savings: "Save ₹4,200" },
      vip: { price: 19999, period: "for 6 months", savings: "Save ₹7,000" }
    },
    annual: {
      standard: { price: 11999, period: "for 12 months", savings: "Best Value (Save ₹6,000)" },
      pro: { price: 17999, period: "for 12 months", savings: "VIP Pass (Save ₹12,000)" },
      vip: { price: 34999, period: "for 12 months", savings: "Ultimate PT Transformation" }
    }
  },

  reviews: [
    {
      quote: "Overall, a perfect place for beginners and regular fitness lovers. The equipment variety is outstanding and the 24/7 hours fit my work schedule perfectly.",
      author: "Verified Member",
      source: "Google Review · 5.0★"
    },
    {
      quote: "Clean atmosphere, supportive trainers, and great energy overall. Floor trainers are always attentive and make sure your form is 100% correct.",
      author: "Newtown Resident",
      source: "Google Review · 5.0★"
    },
    {
      quote: "A great place to work out with a friendly, supportive environment. Open 365 days near Loha Pul which makes it super convenient.",
      author: "Fitness Enthusiast",
      source: "Google Review · 5.0★"
    }
  ],

  faqs: [
    {
      q: "Is the gym really open 24 hours 365 days a year?",
      a: "Yes! Members enjoy round-the-clock biometric/keycard access 24/7, including weekends, national holidays, and late-night hours."
    },
    {
      q: "Are the diet charts truly 100% free?",
      a: "Yes! Every member receives a free customized macro diet chart aligned with their vegetarian or non-vegetarian preferences and body recomposition goals."
    },
    {
      q: "What group classes are included in the membership?",
      a: "Our All-Access Pro and VIP plans include daily batches of Zumba, CrossFit HIIT, Kickboxing, Spinning, and Aerobics at zero extra charge."
    },
    {
      q: "Where is The Fitness World located in Newtown?",
      a: "We are situated at CN129, Thakdari Road, near LOHA PUL, Action Area I, Dhalipara, Newtown, Kolkata 700102."
    }
  ]
};
