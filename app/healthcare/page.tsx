/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface Project {
  id: string;
  company: string;
  project: string;
  timeframe: string;
  role: string;
  image: string;
  imageAlt: string;
  tags: string[];
  description: string[];
}

const THEME = {
  ink: "#0f172a",
  muted: "#6b7280",
  line: "#e5e7eb",
  soft: "#f8fafc",
  panel: "#ffffff",
  maxw: "max-w-6xl",
  radius: "rounded-2xl",
};

// Visible focus ring utility (WCAG 2.4.7 / 2.4.11)
const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/70";

const outcomes = [
  { title: "Clinician Confidence", text: "Reduced cognitive load and improved adherence to clinical protocols." },
  { title: "Member Engagement", text: "Behavioral design increased self-guided action and sustained participation." },
  { title: "Organizational Maturity", text: "Migrated vendor-led delivery to a resilient in-house design practice." },
];

const projects: Project[] = [
  {
    id: "cvs-mah",
    company: "CVS Health",
    project: "ActiveHealth Management Modernization",
    timeframe: "2022–2025",
    role: "Design Strategy Lead · Service & Product Design",
    description: [
      "From 2022 through 2025, led a multi-year service-design and UX transformation of MyActiveHealth (MAH) — CVS Health’s national wellness and benefits platform serving millions of members. The initiative modernized the experience, unified fragmented services, and aligned digital engagement with CVS Health’s strategic focus on behavioral health, accessibility, and member retention.",
      "Working across multiple SAFe Agile digital trains, Kevin directed a cross-functional design team through the delivery of an end-to-end behaviorally informed UX strategy and a comprehensive design-system overhaul. These efforts standardized the experience across employer, member, and coaching touchpoints, ensuring consistent design language, accessibility compliance, and scalability.",
      "Through extensive discovery, journey mapping, and service blueprinting, Kevin and his team uncovered friction points in both the member journey and the service ecosystem. Iterative design and rapid validation cycles improved usability, deepened engagement, and helped the organization translate behavioral insights into measurable design outcomes.",
      "In parallel, Kevin displaced the incumbent vendor (Seamgen) and built a leaner, research-driven design team focused on accessibility, behavioral insight, and content strategy. He authored the Design Playbook, onboarding frameworks, and practice guides that formalized design operations across CVS Healthspire. Once design maturity was established, Kevin led the change-management transition from an external consulting model to a coached, fully internal CVS design team, ensuring continuity, capability transfer, and long-term sustainability.",
    ],
    image: "/images/health/CVS-thumb.png",
    imageAlt: "CVS MAH modernization dashboards and UI components",
    tags: ["Product Design", "Behavior Change", "Analytics"],
  },
  {
    id: "edwards-sd",
    company: "Edwards Lifesciences",
    project: "Service Design for Patient & Clinician Journeys",
    timeframe: "2021–2022",
    role: "Service Designer · Systems & Workflow",
    description: [
      "Partnered with Edwards Lifesciences, a global leader in structural heart disease and surgical monitoring technologies, to design a data-driven analytics service that transformed how clinical teams understand and act on performance insights. The engagement focused on translating complex device data into meaningful, human-centred tools that support protocol adherence, care consistency, and operational efficiency.",
      "Kevin led the UX and service-design effort for digital trains —a responsive analytics dashboard delivering real-time visibility into care-team performance. Using service blueprinting and collaborative workshops, he aligned clinicians, analysts, and field teams around new workflows that connected device data to measurable outcomes, enabling teams to monitor adherence, identify deviations, and intervene earlier in the care process.",
      "The resulting prototype unified clinical operations, data analytics, and end-user experience into a coherent digital ecosystem. The pilot was successfully incubated and advanced toward commercialization, with Edwards establishing a dedicated team to scale the solution into broader market deployment.",
    ],
    image: "/images/health/edwards_thumb.png",
    imageAlt: "Edwards wireframes",
    tags: ["Service Design", "Journey Mapping", "wireframes"],
  },
  {
    id: "vivante-dtx",
    company: "Vivante Health",
    project: "Digital Therapeutics Experience",
    timeframe: "2021–2022",
    role: "Design Strategist · UX Architecture",
    description: [
      "Served as the sole design resource for Vivante Health — a digital-health startup delivering a B2B2C chronic-care platform that helps employers offer personalized digestive-health support to their members through GIThrive. Provided the full range of design services, from service design and UX architecture to visual identity and brand packaging, ensuring consistency across enterprise, clinical, and member-facing experiences.",
      "The engagement focused on guiding the company from concept to MVP, defining the service model, digital workflows, and design standards required to support launch and scale. Developed service blueprints and end-to-end user journeys connecting employers, clinicians, health coaches, and members into a unified ecosystem. Designed onboarding, symptom-tracking, and coaching flows grounded in behavioral-design principles that improved engagement and adherence.",
      "Following MVP readiness, Kevin led the change-management transition from an externally supported design model to a scaffolded in-house design capability — establishing processes, assets, and design foundations that enabled Vivante’s internal team to continue iterating and expanding post-launch.",
    ],
    image: "/images/health/vivante-thumb.png",
    imageAlt: "Vivante package and UI modules",
    tags: ["Digital Therapeutics", "UX Architecture", "Care Workflows"],
  },
  {
    id: "car",
    company: "Canadian Association of Radiologists",
    project: "National Referral Guidelines Platform",
    timeframe: "2020–2021",
    role: "UX Lead · Digital Transformation",
    description: [
      "Led the digital transformation of CAR’s national Mammography Accreditation Program, which ensures imaging facilities, radiologists, and technologists meet federal quality standards. Conducted ethnographic research and workflow analysis to understand accreditation processes and user needs across multiple stakeholder groups.",
      "Designed a fully digital data-management and image-review system, replacing manual, paper-based workflows with a centralized, transparent accreditation platform. Facilitated co-design workshops and iterative prototyping to validate design direction and enable early adoption. Delivered detailed design documentation and specifications that guided implementation and improved operational efficiency, accuracy, and user satisfaction.",
    ],
    image: "/images/health/CAR_flow.jpg",
    imageAlt: "Canadian Association of Radiologists referral guidelines platform UI",
    tags: ["Healthcare", "UX Design", "Clinical Tools"],
  },
  {
    id: "cority",
    company: "Cority",
    project: "Cohort Platform Modernization (myCority UX)",
    timeframe: "2021",
    role: "UX Consultant · Interaction & Research",
    description: [
      "Partnered with Cority, a global provider of enterprise health, safety, and environmental (EHSQ) software, to modernize its Cohort platform within the myCority ecosystem. The initiative focused on redesigning legacy workflows into a scalable, split-panel interface that improved clarity, navigation, and task continuity across complex enterprise modules.",
      "As UX consultant, Kevin led the research, interaction design, and prototype development for key platform components, including questionnaire workflows, appointment scheduling, and data-management interfaces. Collaborating closely with internal stakeholders—Maral, Simon, and Kaysee—he established information-architecture standards, interaction patterns, and save/cancel conventions that unified behavior across modules.",
      "Through iterative design sprints, Kevin created and validated prototypes addressing dynamic panel resizing, modal transitions, and inline editing behaviors. These were documented and shared via annotated wireframes and specifications in Confluence to support consistent development handoffs. Complementary design-research sessions and CAB reviews helped ensure that usability feedback directly informed implementation decisions.",
      "The result was a cohesive UX framework that brought structure and visual simplicity to a previously fragmented enterprise system—strengthening continuity between UX intent and engineering delivery while setting the foundation for future product scalability and consistency.",
    ],
    image: "/images/health/cority_flow.png",
    imageAlt: "Cority Cohort platform modernization split-panel UX flow",
    tags: ["EHSQ Systems", "Interaction Design", "UX Research"],
  },
  {
    id: "abelmed",
    company: "ABELMed",
    project: "Electronic Health Record and Practice Management Modernization",
    timeframe: "2018",
    role: "UX Designer · Workflow & Interaction Design",
    description: [
      "Partnered with ABELMed Inc., a Canadian healthcare software provider specializing in electronic health records (EHR) and practice management systems, to modernize its flagship clinical application suite. The initiative transformed a legacy, on-premise system into a contemporary, user-centred platform aligned with modern usability, accessibility, and regulatory standards.",
      "Led the UX strategy and interface modernization, focusing on simplifying complex workflows across appointment scheduling, batch management, and change-request processing. Mapped current workflows and pain points through contextual inquiry and task analysis, then re-architected the application around modular, repeatable interaction patterns that improved clarity, speed, and learnability.",
      "Collaborated closely with engineering teams, clinical advisors, and end-users through iterative user-testing sessions, ensuring that design concepts were validated directly with physicians, administrators, and billing specialists. These sessions shaped the information architecture, interaction design, and task flows that now define the modern ABELMed experience.",
      "The redesign improved workflow efficiency, user confidence, and overall data visibility, while introducing a scalable foundation for future cloud-enabled delivery.",
    ],
    image: "/images/health/abelsoft_flow2.png",
    imageAlt: "ABELMed workflow overview showing redesigned appointment, batch, and change-request management flows",
    tags: ["EHR Systems", "Workflow Design", "User Testing"],
  },
];

export default function HealthcareExperiencePage() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  // Track which button opened the lightbox, and the Close button inside the dialog
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // ESC to close + lock body scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightbox) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // Focus management: set initial focus to Close, trap focus inside, return to opener
  useEffect(() => {
    if (!lightbox) return;
    // Move focus into the dialog
    closeBtnRef.current?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const dlg = document.getElementById("lightbox-dlg");
      if (!dlg) return;
      const focusables = dlg.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        (last as HTMLElement).focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        (first as HTMLElement).focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [lightbox]);

  const closeLightbox = () => {
    setLightbox(null);
    openerRef.current?.focus(); // return focus to the opener
  };

  return (
    <main
      id="main"
      className="min-h-screen bg-white reduce-motion"
      style={{
        ["--ink" as any]: THEME.ink,
        ["--muted" as any]: THEME.muted,
        ["--line" as any]: THEME.line,
        ["--soft" as any]: THEME.soft,
        ["--panel" as any]: THEME.panel,
      }}
    >
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black shadow"
      >
        Skip to main content
      </a>

      {/* Hero */}
      <section className="relative">
        <div className={`${THEME.maxw} mx-auto px-6 py-14 md:py-20`}>
          {/* Back link */}
          <nav className="mb-6 text-[13px] text-[var(--muted)]">
            <Link
              href="/"
              className={`${FOCUS} inline-flex items-center hover:underline hover:text-[var(--ink)] transition-colors`}
            >
              ← Back to Main Page
            </Link>
          </nav>

          <p className="mb-3 text-[11px] md:text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Selected Work
          </p>
          <h1 className="text-[34px] leading-[1.15] md:text-[46px] font-semibold text-[var(--ink)]">
            Healthcare Experience
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-[var(--muted)]">
            A decade of shipping healthtech—from population-level analytics to
            member engagement and clinician tools. Strategy to UI, grounded in
            behavior change, accessibility, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-[var(--line)] bg-[var(--soft)]">
        <div className={`${THEME.maxw} mx-auto px-6 py-10`}>
          <h2 className="mb-5 text-[20px] md:text-[22px] font-semibold text-[var(--ink)]">Outcomes</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {outcomes.map((o) => (
              <div
                key={o.title}
                className={`${THEME.radius} bg-[var(--panel)] border border-[var(--line)] p-6 shadow-[0_1px_1px_rgba(0,0,0,.03),_0_6px_24px_rgba(0,0,0,.05)]`}
              >
                <div className="text-[16px] md:text-[18px] font-semibold text-[var(--ink)]">{o.title}</div>
                <p className="mt-2 text-[13px] md:text-[14px] leading-relaxed text-[var(--muted)]">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section>
        <div className={`${THEME.maxw} mx-auto px-6 py-12 md:py-16`}>
          <h2 className="mb-7 text-[22px] md:text-[26px] font-semibold text-[var(--ink)]">Case Studies</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.id}
                className={`${THEME.radius} overflow-hidden bg-[var(--panel)] border border-[var(--line)] shadow-[0_1px_1px_rgba(0,0,0,.03),_0_6px_24px_rgba(0,0,0,.05)]`}
              >
                <div className="p-6">
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--ink)] leading-tight">
                    {p.company}
                  </h3>
                  <div className="h-[1px] bg-[var(--line)] my-2 w-12 opacity-70" />
                  <p className="text-[14px] md:text-[15px] text-[var(--muted)] italic">{p.project}</p>
                  <div className="mt-1 text-[13px] text-[var(--muted)]">
                    {p.timeframe} · {p.role}
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Open full image"
                  aria-haspopup="dialog"
                  className={`group block ${FOCUS}`}
                  onClick={(e) => {
                    openerRef.current = e.currentTarget as HTMLButtonElement;
                    setLightbox({ src: p.image, alt: p.imageAlt });
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-[1.01] cursor-zoom-in"
                    loading="lazy"
                  />
                </button>

                <div className="p-6">
                  <ul className="mt-1 flex flex-wrap gap-2 text-[11px] text-[var(--muted)]">
                    {p.tags.map((t) => (
                      <li key={t} className={`${THEME.radius} border border-[var(--line)] px-2.5 py-1`}>{t}</li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-[var(--ink)]/90">
                    {p.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-[var(--line)] bg-[var(--soft)]">
        <div className={`${THEME.maxw} mx-auto px-6 py-12 md:py-16`}>
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--ink)]">Capabilities for Health & Wellness</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Healthtech DNA",
                bullets: ["Member, clinician, employer experiences", "Medical guidance & care plan flows", "Privacy, consent, and compliance aware"],
              },
              {
                title: "Outcomes & Analytics",
                bullets: ["Experimentation with telemetry (Amplitude)", "Behavior change principles (BxD)", "North-star metrics connected to UI"],
              },
              {
                title: "Delivery at Scale",
                bullets: ["Design systems aligned to SAFe/PI", "Vendor → in-house transitions", "Accessibility built-in"],
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`${THEME.radius} bg-[var(--panel)] border border-[var(--line)] p-6 shadow-[0_1px_1px_rgba(0,0,0,.03),_0_6px_24px_rgba(0,0,0,.05)]`}
              >
                <div className="font-medium text-[var(--ink)]/90">{c.title}</div>
                <ul className="mt-3 list-inside list-disc text-[13px] text-[var(--muted)]">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section>
        <div className={`${THEME.maxw} mx-auto px-6 py-14`}>
          <div className={`${THEME.radius} border border-[var(--line)] bg-gradient-to-b from-[var(--soft)] to-[var(--panel)] p-8 shadow-[0_1px_1px_rgba(0,0,0,.03),_0_6px_24px_rgba(0,0,0,.05)]`}>
            <h4 className="text-[18px] md:text-[20px] font-semibold text-[var(--ink)]">Have a healthcare problem to untangle?</h4>
            <p className="mt-1 max-w-2xl text-[13px] md:text-[14px] text-[var(--muted)]">
              I help product, clinical, and analytics teams ship meaningful outcomes—without adding complexity for members and clinicians.
            </p>
            <p className="mt-4">
              <Link href="/#contact" className={`${FOCUS} inline-flex items-center rounded-full border border-[var(--line)] px-4 py-2 text-sm hover:bg-[var(--soft)]`}>
                Start a healthcare project
              </Link>
            </p>
          </div>
        </div>
      </section>

      <footer className={`${THEME.maxw} mx-auto px-6 pb-14 text-[11px] text-[var(--muted)]`}>
        Built with accessibility, performance, and measurable outcomes in mind.
      </footer>

      {/* Lightbox (dialog) */}
      {lightbox && (
        <div
          id="lightbox-dlg"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0" />
          <div className="relative max-h-[90vh] max-w-[95vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
            />
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close image preview"
              className={`${FOCUS} absolute -top-3 -right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-black shadow hover:bg-white`}
              onClick={closeLightbox}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Reduce motion helper */}
      <style>{`
  @media (prefers-reduced-motion: reduce) {
    .reduce-motion * {
      transition: none !important;
      animation: none !important;
      transform: none !important;
    }
  }
`}</style>

    </main>
  );
}
