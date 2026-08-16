/**
 * The Fitness World - Lohar Pul, New Town, Kolkata
 * Universal Award-Winning Interactive Engine
 */

const TFW_CONFIG = {
  name: "The Fitness World",
  branch: "Lohar Pul, New Town, Kolkata",
  address: "CN129, Thakdari Rd, near LOHA PUL, Action Area I, Dhalipara, Newtown, Kolkata 700102",
  phonePrimary: "097759 95300",
  phoneSecondary: "086536 80217",
  whatsappNumber: "919775995300",
  rating: "4.9",
  reviewsCount: "99+",
  hours: "Open 24 Hours · 365 Days a Year",

  // Membership Pricing by Duration
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

  // Popular Times by Day
  popularTimes: {
    mon: [
      { time: "5:30 AM – 8:00 AM", status: "Moderate (Great for morning lifting)", type: "moderate" },
      { time: "8:00 AM – 11:00 AM", status: "Quiet (Zero waiting for benches)", type: "quiet" },
      { time: "5:30 PM – 9:30 PM", status: "Peak Hours (High energy, Zumba & HIIT live)", type: "peak" },
      { time: "9:30 PM – 2:00 AM", status: "Quiet (Night owl strength sessions)", type: "quiet" }
    ],
    tue: [
      { time: "5:30 AM – 8:30 AM", status: "Moderate (Cardio & Crossfit)", type: "moderate" },
      { time: "8:30 AM – 12:00 PM", status: "Quiet (Open racks available)", type: "quiet" },
      { time: "6:00 PM – 9:30 PM", status: "Peak Hours (Kickboxing & Weights)", type: "peak" },
      { time: "10:00 PM – 5:00 AM", status: "24/7 Access (Peaceful workout)", type: "quiet" }
    ],
    wed: [
      { time: "6:00 AM – 9:00 AM", status: "Moderate (Morning cardio & strength)", type: "moderate" },
      { time: "9:00 AM – 4:00 PM", status: "Quiet (Spacious & relaxed)", type: "quiet" },
      { time: "5:30 PM – 10:00 PM", status: "Peak Hours (CrossFit + Group classes)", type: "peak" },
      { time: "10:00 PM – 6:00 AM", status: "24/7 Access (Solo training)", type: "quiet" }
    ],
    thu: [
      { time: "5:30 AM – 8:30 AM", status: "Moderate", type: "moderate" },
      { time: "8:30 AM – 5:00 PM", status: "Quiet (Full equipment access)", type: "quiet" },
      { time: "6:00 PM – 9:30 PM", status: "Peak (Weight training crowd)", type: "peak" },
      { time: "10:00 PM – 5:00 AM", status: "Night Owls (Smooth burn)", type: "quiet" }
    ],
    fri: [
      { time: "6:00 AM – 9:00 AM", status: "Moderate", type: "moderate" },
      { time: "9:00 AM – 4:30 PM", status: "Quiet", type: "quiet" },
      { time: "5:30 PM – 9:30 PM", status: "Peak Energy (Weekend kickoff)", type: "peak" },
      { time: "10:00 PM – 6:00 AM", status: "24/7 Floor Open", type: "quiet" }
    ],
    sat: [
      { time: "6:00 AM – 10:30 AM", status: "Peak (Weekend morning power)", type: "peak" },
      { time: "11:00 AM – 4:00 PM", status: "Moderate (Zumba workshops)", type: "moderate" },
      { time: "5:00 PM – 9:00 PM", status: "Moderate to Peak (Strength drills)", type: "peak" },
      { time: "9:00 PM – 6:00 AM", status: "Quiet Access", type: "quiet" }
    ],
    sun: [
      { time: "6:30 AM – 11:30 AM", status: "Peak (Sunday community workouts)", type: "peak" },
      { time: "12:00 PM – 5:00 PM", status: "Quiet", type: "quiet" },
      { time: "5:30 PM – 8:30 PM", status: "Moderate", type: "moderate" },
      { time: "9:00 PM – 6:00 AM", status: "24/7 Access", type: "quiet" }
    ]
  }
};

// Helper: Build WhatsApp Link
function buildWhatsAppUrl(message) {
  return `https://wa.me/${TFW_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Show Toast
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Modal Control
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Lightbox Photo Viewer
function openLightbox(imgSrc) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  if (modal && img) {
    img.src = imgSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize Lenis (Desktop smooth scroll, native mobile touch)
function initLenis() {
  if (typeof Lenis !== 'undefined' && window.innerWidth > 768) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

// Theme Switcher (Dark / Light)
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('tfw_theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (toggleBtn) {
    toggleBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('tfw_theme', nextTheme);
      toggleBtn.innerHTML = nextTheme === 'dark' ? '☀️' : '🌙';
      showToast(`Switched to ${nextTheme.toUpperCase()} MODE`);
    });
  }
}

// Mouse Spotlight Tracker (Desktop only)
function initMouseSpotlight() {
  const spotlight = document.getElementById('mouse-spotlight');
  if (!spotlight || window.innerWidth < 768) return;

  window.addEventListener('mousemove', (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });
}

// 3D Card Tilt Effect (Desktop only)
function init3DTilt() {
  if (window.innerWidth < 1024) return;
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// Interactive Before / After Comparison Slider
function initComparisonSlider() {
  const container = document.getElementById('comparison-container');
  const afterImage = document.getElementById('comparison-after');
  const handle = document.getElementById('comparison-slider-handle');
  if (!container || !afterImage || !handle) return;

  let isDragging = false;

  const moveSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    afterImage.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (isDragging) moveSlider(e.clientX);
  });

  // Touch support for mobile
  handle.addEventListener('touchstart', () => isDragging = true, { passive: true });
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length) {
      moveSlider(e.touches[0].clientX);
    }
  }, { passive: true });
}

// Preloader Simulation (3.6s)
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const counter = document.getElementById('preloader-counter');
  const fill = document.getElementById('preloader-bar-fill');
  if (!preloader || !counter || !fill) return;

  const totalDuration = 3600;
  const startTime = performance.now();

  function updateLoading(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(Math.floor((elapsed / totalDuration) * 100), 100);

    let statusText = "INITIALIZING";
    if (progress < 25) {
      statusText = "INITIALIZING ARENA";
    } else if (progress < 55) {
      statusText = "CALIBRATING 24/7 MATRIX";
    } else if (progress < 85) {
      statusText = "LOADING COACH ENGINES";
    } else if (progress < 100) {
      statusText = "FORGING ENVIRONMENT";
    } else {
      statusText = "SYSTEM READY";
    }

    counter.textContent = `${statusText} // ${String(progress).padStart(2, '0')}%`;
    fill.style.width = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(updateLoading);
    } else {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 350);
    }
  }

  requestAnimationFrame(updateLoading);
}

// Switch Membership Duration
function setPricingDuration(duration) {
  document.querySelectorAll('.pricing-tab').forEach(btn => {
    if (btn.dataset.duration === duration) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const data = TFW_CONFIG.memberships[duration];
  if (!data) return;

  // Standard Plan
  const standardPrice = document.getElementById('price-standard');
  const standardPeriod = document.getElementById('period-standard');
  const standardSavings = document.getElementById('savings-standard');
  const standardBtn = document.getElementById('btn-plan-standard');
  if (standardPrice) standardPrice.textContent = data.standard.price.toLocaleString('en-IN');
  if (standardPeriod) standardPeriod.textContent = data.standard.period;
  if (standardSavings) standardSavings.textContent = data.standard.savings;
  if (standardBtn) {
    const msg = `Hi The Fitness World Team,\n\nI want to enroll in the *Standard Strength Pass* (${data.standard.period} @ ₹${data.standard.price}). Please share registration details.`;
    standardBtn.href = buildWhatsAppUrl(msg);
  }

  // Pro Plan
  const proPrice = document.getElementById('price-pro');
  const proPeriod = document.getElementById('period-pro');
  const proSavings = document.getElementById('savings-pro');
  const proBtn = document.getElementById('btn-plan-pro');
  if (proPrice) proPrice.textContent = data.pro.price.toLocaleString('en-IN');
  if (proPeriod) proPeriod.textContent = data.pro.period;
  if (proSavings) proSavings.textContent = data.pro.savings;
  if (proBtn) {
    const msg = `Hi The Fitness World Team,\n\nI want to join the *All-Access Pro Pass* (${data.pro.period} @ ₹${data.pro.price}). Please reserve my membership spot.`;
    proBtn.href = buildWhatsAppUrl(msg);
  }

  // VIP Plan
  const vipPrice = document.getElementById('price-vip');
  const vipPeriod = document.getElementById('period-vip');
  const vipSavings = document.getElementById('savings-vip');
  const vipBtn = document.getElementById('btn-plan-vip');
  if (vipPrice) vipPrice.textContent = data.vip.price.toLocaleString('en-IN');
  if (vipPeriod) vipPeriod.textContent = data.vip.period;
  if (vipSavings) vipSavings.textContent = data.vip.savings;
  if (vipBtn) {
    const msg = `Hi The Fitness World Team,\n\nI am interested in the *VIP Transformation Pass* (${data.vip.period} @ ₹${data.vip.price} with 1-on-1 PT). Please connect me with a coach.`;
    vipBtn.href = buildWhatsAppUrl(msg);
  }
}

// Switch Popular Times Day
function setPopularDay(dayKey) {
  document.querySelectorAll('.day-btn').forEach(btn => {
    if (btn.dataset.day === dayKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const slots = TFW_CONFIG.popularTimes[dayKey] || [];
  const container = document.getElementById('times-slots-container');
  if (!container) return;

  container.innerHTML = slots.map(slot => `
    <div class="time-slot-card ${slot.type}">
      <div class="slot-time">${slot.time}</div>
      <div class="slot-status">${slot.status}</div>
    </div>
  `).join('');
}

// Filter Services
function filterServices(category) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.service-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Interactive BMI & Target Calculator
function calculateFitnessTarget(e) {
  e.preventDefault();
  const height = parseFloat(document.getElementById('calc-height').value);
  const weight = parseFloat(document.getElementById('calc-weight').value);
  const goal = document.getElementById('calc-goal').value;

  if (!height || !weight) return;

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
  
  let category = "";
  let targetCalories = 0;
  let proteinTarget = Math.round(weight * 1.8);

  if (bmi < 18.5) {
    category = "Underweight / Lean";
    targetCalories = Math.round(weight * 36);
  } else if (bmi <= 24.9) {
    category = "Normal / Athletic";
    targetCalories = goal === 'muscle' ? Math.round(weight * 34) : Math.round(weight * 28);
  } else {
    category = "High Body Fat / Overweight";
    targetCalories = Math.round(weight * 24);
  }

  const resultContainer = document.getElementById('calc-result-box');
  if (!resultContainer) return;

  const claimMsg = `Hi The Fitness World Team,\n\nI just calculated my BMI (${bmi} - ${category}) with target ${targetCalories} kcal/day & ${proteinTarget}g protein. Please share my customized 100% Free Diet Chart for the Newtown gym!`;

  resultContainer.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 10px; color: var(--accent-gold); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px; font-weight: 700;">
      // TRANSFORMATION METRICS
    </div>
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
      <div>
        <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase;">Calculated BMI</div>
        <div style="font-family: var(--font-display); font-size: 34px; color: var(--accent-red); line-height: 1;">${bmi}</div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase;">Body Status</div>
        <div style="font-size: 13px; font-weight: 800; color: var(--text-primary);">${category}</div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
      <div style="background: var(--bg-surface); padding: 10px; border-radius: 4px; border: 1px solid var(--border-subtle);">
        <div style="font-size: 10px; color: var(--text-subtle);">Daily Target</div>
        <div style="font-size: 16px; font-weight: 800; color: var(--accent-gold);">${targetCalories} kcal</div>
      </div>
      <div style="background: var(--bg-surface); padding: 10px; border-radius: 4px; border: 1px solid var(--border-subtle);">
        <div style="font-size: 10px; color: var(--text-subtle);">Protein Goal</div>
        <div style="font-size: 16px; font-weight: 800; color: var(--text-primary);">${proteinTarget}g</div>
      </div>
    </div>

    <a href="${buildWhatsAppUrl(claimMsg)}" target="_blank" rel="noopener noreferrer" class="btn-hero-primary" style="width: 100%; justify-content: center; font-size: 11.5px; padding: 12px 16px;">
      <span>Get Free Custom Diet Chart ↗</span>
    </a>
  `;
}

// Animate Counters on Scroll
function initCounters() {
  const counters = document.querySelectorAll('.counter-num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.dataset.target);
        const suffix = entry.target.dataset.suffix || "";
        let current = 0;
        const duration = 1200;
        const stepTime = 20;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = (target % 1 === 0 ? Math.round(current) : current.toFixed(1)) + suffix;
        }, stepTime);

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initPreloader();
  initTheme();
  initMouseSpotlight();
  init3DTilt();
  initComparisonSlider();
  setPricingDuration('monthly');
  setPopularDay('mon');
  initCounters();

  // Pricing Tabs
  document.querySelectorAll('.pricing-tab').forEach(btn => {
    btn.addEventListener('click', () => setPricingDuration(btn.dataset.duration));
  });

  // Day Tabs
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => setPopularDay(btn.dataset.day));
  });

  // Service Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => filterServices(btn.dataset.category));
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) item.classList.toggle('open');
    });
  });

  // Calculator Form
  const calcForm = document.getElementById('fitness-calc-form');
  if (calcForm) {
    calcForm.addEventListener('submit', calculateFitnessTarget);
  }

  // Free Trial Form
  const trialForm = document.getElementById('trial-pass-form');
  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('trial-name').value.trim();
      const phone = document.getElementById('trial-phone').value.trim();
      const goal = document.getElementById('trial-goal').value;
      const timeSlot = document.getElementById('trial-time').value;

      const message = `Hello The Fitness World (Lohar Pul),\n\n*1-Day Free Trial Pass Request:*\n• Name: ${name}\n• Phone: ${phone}\n• Fitness Goal: ${goal}\n• Preferred Time: ${timeSlot}\n\nPlease confirm my 1-day free pass for the Newtown branch.`;

      showToast('Opening WhatsApp for your Free Trial Pass confirmation...');
      closeModal('trial-modal');

      setTimeout(() => {
        window.open(buildWhatsAppUrl(message), '_blank');
      }, 500);
    });
  }

  // Mobile Menu
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('tfw-nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

  // Modal Backdrop Click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});
