'use client';
import React from 'react';

export default function LandingPage() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:kevin@example.com';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/dv[ux]-logo.png" alt="dvux logo" className="h-10 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Selected Work</a>
            <a href="#engagement" className="hover:text-gray-900">Engagement</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-700">Let’s talk</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="uppercase tracking-wide text-xs text-gray-500">Consulting • Fractional leadership • Product delivery</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">Design Strategist & Product Design Leader</h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              I transform complex problems into simple, scalable digital experiences—blending hands-on product design with executive-level strategy. Available for consulting, fractional leadership, audits, and end-to-end delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl px-5 py-3 bg-gray-900 text-white font-medium hover:bg-gray-700">Start a conversation</a>
              <a href="https://www.linkedin.com/in/" className="rounded-2xl px-5 py-3 border border-gray-300 hover:border-gray-600 text-gray-900">LinkedIn</a>
              <a href="#services" className="rounded-2xl px-5 py-3 border border-gray-300 hover:border-gray-600 text-gray-900">Explore services</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-2 text-gray-600 text-sm">Strategy-first with hands-on execution</p>
            <img src="/IMG_6640-2.png" alt="Kevin Deevey portrait" className="mt-6 rounded-xl shadow-md" />
          </div>
          <div className="md:col-span-2 leading-relaxed space-y-4 text-gray-800">
            <p>
              I am a senior design leader, strategist, and product designer specializing in transforming complex challenges into simple, scalable, and high-impact digital experiences. With deep experience in <strong>design strategy</strong>, <strong>digital transformation</strong>, and <strong>product design leadership</strong>, I’ve led multi-year initiatives in healthcare, finance, and enterprise platforms—shaping product vision, aligning stakeholders, and delivering measurable results.
            </p>
            <p>
              I excel where design must demonstrate strategic value—facilitating change management, driving cross-functional collaboration, and ensuring solutions are human-centered, business-aligned, and operationally feasible. Alongside leadership, I provide <strong>hands-on product design</strong> in UX, UI, and service design—bridging vision and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Design Strategy</h3>
              <p className="mt-3 text-sm text-gray-700">Aligning user needs with business goals through strategic planning, research, and facilitation.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Product Design</h3>
              <p className="mt-3 text-sm text-gray-700">Hands-on UX/UI design from discovery to delivery, creating usable and beautiful interfaces.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Leadership & Coaching</h3>
              <p className="mt-3 text-sm text-gray-700">Fractional leadership, team building, and mentoring to elevate in-house design capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">A showcase of key projects and engagements that highlight my approach to design strategy, leadership, and delivery.</p>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement" className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Engagement Models</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Consulting</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Strategy sprints</li>
                <li>Org & product audits</li>
                <li>Roadmap definition</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Fractional Leadership</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Interim Head of Design</li>
                <li>Team coaching & hiring</li>
                <li>Ways-of-working</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">End-to-End Delivery</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Discovery → MVP</li>
                <li>Prototyping & testing</li>
                <li>Design systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <form className="grid gap-3 mt-8" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" required />
            <input type="email" placeholder="Your email" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" required />
            <textarea placeholder="Your message" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" rows="5" required></textarea>
            <button type="submit" className="rounded-2xl px-5 py-3 bg-gray-900 text-white font-medium hover:bg-gray-700">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
